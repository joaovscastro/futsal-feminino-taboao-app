import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  FlatList,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { parseJSON, format, formatRelative, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TabView, SceneMap } from 'react-native-tab-view';
import HTMLView from 'react-native-htmlview';
import HTML from 'react-native-render-html';

import api from '../../services/api';
import Lottie from 'lottie-react-native';

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

import BolaLoad from '../../../bola-load.json';
import fotoAvatar from '../../../assets/img/perfil-teste.jpg';

export default function Feed() {
  const [loading, Setloading] = useState(false);
  const [feed, Setfeed] = useState([]);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Novidades' },
    { key: 'second', title: 'Second' },
  ]);
  const [page, Setpage] = useState(1);
  const [total, Settotal] = useState(0);
  const [refreshing, Setrefreshing] = useState(false);

  const [impala, Setimpala] = useState('');

  async function loadFeed(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return;

    Setloading(true);

    const responseFeed = await api.get(
      `buddypress/v1/activity?type=activity_update&page=${pageNumber}&per_page=10`
    );

    const totalItems = responseFeed.headers['x-wp-totalpages'];

    Settotal(totalItems);

    const data = responseFeed.data.map(posts => ({
      ...posts,
      dateFormatted: format(parseJSON(posts.date), "dd 'de' MMMM 'de' yyyy' ", {
        locale: pt,
      }),
    }));

    Setfeed(shouldRefresh ? data : [...feed, ...data]);
    Setpage(pageNumber + 1);
    Setloading(false);
  }

  useEffect(() => {
    loadFeed();
  }, []);

  async function refreshList() {
    Setrefreshing(true);

    await loadFeed(1, true);

    Setrefreshing(false);
  }

  async function favoritePost(idPost) {
    await api.post(`/buddypress/v1/activity/${idPost}/favorite`);
    Setrefreshing(true);
    await loadFeed(1, true);
    Setrefreshing(false);
  }

  async function newPost() {
    try {
      await api.post('buddypress/v1/activity', {
        type: 'activity_update',
        content: impala,
      });
      Setrefreshing(true);
      await loadFeed(1, true);
      Setrefreshing(false);
    } catch (err) {
      Alert.alert(
        'Falha na autenticação',
        'Houve um erro no login, verifique seus dados'
      );
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Feed</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        <FlatList
          style={{ marginBottom: 40 }}
          data={feed}
          keyExtractor={post => String(post.id)}
          onEndReached={() => loadFeed()}
          onEndReachedThreshold={0.1}
          onRefresh={refreshList}
          refreshing={refreshing}
          ListFooterComponent={
            loading && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Lottie
                  resizeMode="contain"
                  autoSize
                  source={BolaLoad}
                  autoPlay
                  loop={true}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                />
                <Text style={{ color: '#666', fontSize: 11 }}>
                  Carregando...
                </Text>
              </View>
            )
          }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <FeedItem key={item.id}>
              <FeedHeader>
                <FeedAvatar source={{ uri: item.user_avatar.thumb }} />

                <HTMLView
                  style={{ flex: 1, marginLeft: 10 }}
                  value={`<span>${item.title}</span>`}
                  stylesheet={stylesDesc}
                />
                <FeedData>{item.dateFormatted}</FeedData>
              </FeedHeader>

              <HTML
                tagsStyles={{
                  p: {
                    fontStyle: 'italic',
                    color: 'red',
                  },
                }}
                html={item.content.rendered}
              />

              <FeedIcons>
                {item.favorited ? (
                  <Icon
                    name="heart-outline"
                    size={20}
                    color="#f00"
                    style={{ marginRight: 10 }}
                  />
                ) : (
                  <TouchableOpacity onPress={() => favoritePost(item.id)}>
                    <Icon
                      name="heart-outline"
                      size={20}
                      style={{ marginRight: 10 }}
                    />
                  </TouchableOpacity>
                )}
              </FeedIcons>
            </FeedItem>
          )}
        />
        <TouchableOpacity onPress={() => newPost()}>
          <Text>Comentar</Text>
        </TouchableOpacity>
        <Text>{impala}</Text>
        <TextInput
          placeholder="Comentario"
          onChangeText={Setimpala}
          value={impala}
          style={{ backgroundColor: '#666' }}
        />
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
