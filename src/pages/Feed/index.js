import React from 'react';
import { View, SafeAreaView, Image, Text } from 'react-native';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
Icon.loadFont()

import { Container, Header, HeaderTexts, HeaderTextName, FeedContent, FeedItem,
  FeedHeader, FeedAvatar, FeedName, FeedContentText,
  FeedIcons, FeedData } from './styles';

import fotoAvatar  from "../../../assets/img/perfil-teste.jpg";


export default function Feed() {


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
    <Header>
      <HeaderTexts>
        <HeaderTextName>Feed</HeaderTextName>
      </HeaderTexts>
    </Header>
    <Container>
    <FeedContent>
    <FeedItem>
        <FeedHeader>
          <FeedAvatar source={fotoAvatar} />
          <FeedName>Futsal Feminino Taboão</FeedName>
          <FeedData>12/02/2020</FeedData>
        </FeedHeader>
        <FeedContentText>ConteudoConteudoConteudoConteudoConteudoConteudoConteudoConteudoConteudo</FeedContentText>
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
        <FeedContentText>ConteudoConteudoConteudoConteudoConteudoConteudoConteudoConteudoConteudo</FeedContentText>
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
        <FeedContentText>ConteudoConteudoConteudoConteudoConteudoConteudoConteudoConteudoConteudo</FeedContentText>
        <FeedIcons>
        <Icon name="heart-outline" size={20} style={{ marginRight: 10 }} />
        <Icon name="comment-outline" size={20} />
        </FeedIcons>
      </FeedItem>

    </FeedContent>
</Container>
</SafeAreaView>
  );
}

Feed.navigationOptions = {
  title: "Feed",
  tabBarIcon: ({ tintColor }) => (<Icon name="fire" size={30} color={tintColor} />)
}
