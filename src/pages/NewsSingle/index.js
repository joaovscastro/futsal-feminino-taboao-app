import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import HTMLView from 'react-native-htmlview';

import {
  BackButton,
  BackButtonContent,
  Container,
  Title,
  Data,
  Content,
  Share,
  TitleComent,
  Comentario,
  ComentarioCont,
  DataComent,
  ComentName,
  ComentCont,
  ComentAvatar,
} from './styles';
import fotoAvatar from '../../../assets/img/avatar.png';

import Img1 from '../../../assets/img/img1.jpg';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

export default function NewsSingle({ navigation }) {
  const noticiasingle = navigation.getParam('noticiasingle');
  console.log(noticiasingle.content.rendered);
  return (
    <>
      <ImageBackground
        source={{ uri: noticiasingle.jetpack_featured_media_url }}
        style={{
          width: null,
          height: 220,
          backgroundColor: '#f9f9f9',
        }}
      >
        <SafeAreaView>
          <BackButton onPress={() => navigation.goBack()}>
            <BackButtonContent>
              <Icon name="chevron-left" size={30} />
            </BackButtonContent>
          </BackButton>
        </SafeAreaView>
      </ImageBackground>
      <Container>
        <Title>{noticiasingle.title.rendered}</Title>
        <Data>02/01/2020</Data>
        <HTMLView
          value={noticiasingle.content.rendered}
          stylesheet={stylesDesc}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Share>Compartilhar</Share>
          <Icon name="share-outline" size={20} color="#000000" />
        </View>
        <View style={{ marginBottom: 50 }}>
          <TitleComent>Comentários</TitleComent>
          <Comentario>
            <ComentarioCont>
              <ComentAvatar source={fotoAvatar} />
              <ComentName>João Castro</ComentName>
              <DataComent>12/01/2020</DataComent>
            </ComentarioCont>
            <ComentCont>
              comentcomentcomentcomentcomentcomentcomentcomentcomentcomentcomentcomentcomentcoment
            </ComentCont>
          </Comentario>
          <Comentario>
            <ComentarioCont>
              <ComentAvatar source={fotoAvatar} />
              <ComentName>João Castro</ComentName>
              <DataComent>12/01/2020</DataComent>
            </ComentarioCont>
            <ComentCont>
              comentcomentcomentcomentcomentcomentcomentcomentcomentcomentcomentcomentcomentcoment
            </ComentCont>
          </Comentario>
        </View>
      </Container>
    </>
  );
}

const stylesDesc = StyleSheet.create({
  p: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666666',
  },
  a: {
    fontWeight: '300',
    color: '#D3004C',
  },
});
