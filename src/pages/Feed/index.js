import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <Container>
    <FeedContent>
      <FeedItem>
        <FeedHeader>
          <FeedAvatar source={fotoAvatar} />
          <FeedName>Futsal Feminino Taboão</FeedName>
          <FeedData>12/02/2020</FeedData>
        </FeedHeader>
        <FeedContentText>
          ConteudoConteudoConteudoConteudoConteudoConteudoConteudoConteudoConteudo
        </FeedContentText>
        <FeedIcons>
          <Icon name="heart-outline" size={20} style={{ marginRight: 10 }} />
          <Icon name="comment-outline" size={20} />
        </FeedIcons>
      </FeedItem>
      <FeedItem>
        <FeedHeader>
          <FeedAvatar source={fotoAvatar} />
          <FeedName>Futsal Feminino Taboão</FeedName>
          <FeedData>12/02/2020</FeedData>
        </FeedHeader>
        <FeedContentText>
          ConteudoConteudoConteudoConteudoConteudoConteudoConteudoConteudoConteudo
        </FeedContentText>
        <FeedIcons>
          <Icon name="heart-outline" size={20} style={{ marginRight: 10 }} />
          <Icon name="comment-outline" size={20} />
        </FeedIcons>
      </FeedItem>
      <FeedItem>
        <FeedHeader>
          <FeedAvatar source={fotoAvatar} />
          <FeedName>Futsal Feminino Taboão</FeedName>
          <FeedData>12/02/2020</FeedData>
        </FeedHeader>
        <FeedContentText>
          ConteudoConteudoConteudoConteudoConteudoConteudoConteudoConteudoConteudo
        </FeedContentText>
        <FeedIcons>
          <Icon name="heart-outline" size={20} style={{ marginRight: 10 }} />
          <Icon name="comment-outline" size={20} />
        </FeedIcons>
      </FeedItem>
    </FeedContent>
  </Container>
);

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
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Novidades' },
    { key: 'second', title: 'Second' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Feed</HeaderTextName>
        </HeaderTexts>
      </Header>
      <TabView
        style={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
      />
    </SafeAreaView>
  );
}

Feed.navigationOptions = {
  title: 'Feed',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="fire" size={30} color={tintColor} />
  ),
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
