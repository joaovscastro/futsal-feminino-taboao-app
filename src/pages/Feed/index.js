import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import { parseJSON, format, formatRelative, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '../../services/api';
import { TabView, SceneMap } from 'react-native-tab-view';
import HTMLView from 'react-native-htmlview';

const SecondRoute = () => <View />;

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import {
  Container,
  Header,
  HeaderTexts,
  HeaderTextName,
  FeedContent,
  FeedItem,
  FeedHeader,
  FeedAvatar,
  FeedName,
  FeedContentText,
  FeedIcons,
  FeedData,
} from './styles';

import fotoAvatar from '../../../assets/img/perfil-teste.jpg';

export default function Feed() {
  const [feed, Setfeed] = useState([]);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Novidades' },
    { key: 'second', title: 'Second' },
  ]);

  async function loadFeed() {
    const responseFeed = await api.get(
      'buddypress/v1/activity?type=activity_update'
    );

    const data = responseFeed.data.map(posts => ({
      ...posts,
      dateFormatted: format(parseJSON(posts.date), "dd 'de' MMMM 'de' yyyy'", {
        locale: pt,
      }),
    }));

    Setfeed(data);
  }

  useEffect(() => {
    loadFeed();
  }, []);

  async function favoritePost(idPost) {
    console.log(idPost);
    const impala = await api.post(`/buddypress/v1/activity/${idPost}/favorite`);
    console.log(impala);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Feed</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        <FeedContent>
          {feed.map(post => (
            <FeedItem key={post.id}>
              <FeedHeader>
                <FeedAvatar source={{ uri: post.user_avatar.thumb }} />
                <HTMLView
                  style={{ flex: 1, marginLeft: 10 }}
                  value={`<span>${post.title}</span>`}
                  stylesheet={stylesDesc}
                />
                <FeedData>{post.dateFormatted}</FeedData>
              </FeedHeader>

              <HTMLView
                style={{ marginBottom: -80 }}
                value={post.content.rendered}
                stylesheet={stylesCont}
              />

              <FeedIcons>
                {post.favorited ? (
                  <Icon
                    name="heart-outline"
                    size={20}
                    color="#f00"
                    style={{ marginRight: 10 }}
                  />
                ) : (
                  <Icon
                    name="heart-outline"
                    size={20}
                    style={{ marginRight: 10 }}
                  />
                )}

                <Icon name="comment-outline" size={20} />
              </FeedIcons>
            </FeedItem>
          ))}
        </FeedContent>
      </Container>
    </SafeAreaView>
  );
}

Feed.navigationOptions = {
  title: 'Feed',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="fire" size={30} color={tintColor} />
  ),
};

const stylesDesc = StyleSheet.create({
  p: {
    margin: 20,
    fontFamily: 'Axiforma-Regular',
    fontSize: 14,
    lineHeight: 13,
    color: '#000000',
  },
  span: {
    fontSize: 1,
    color: '#eee',
  },
  a: {
    margin: 20,
    fontFamily: 'Axiforma-Regular',
    fontSize: 14,
    lineHeight: 13,
    color: '#000000',
  },
});

const stylesCont = StyleSheet.create({
  p: {
    margin: 20,
    fontFamily: 'Axiforma-Regular',
    fontSize: 14,
    lineHeight: 13,
    color: '#000000',
  },
  a: {
    fontSize: 14,
    fontWeight: '300',
    color: '#D3004C',
  },
});
