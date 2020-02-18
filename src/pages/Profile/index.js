import React from 'react';
import { connect } from 'react-redux';
import { View, SafeAreaView, Image, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import {
  Header,
  HeaderTexts,
  HeaderTextName,
  HeaderTextDesc,
  SearchContent,
  SearchBtn,
  Container,
  Noticias,
  NoticiasImg,
  NoticiasTitle,
  NoticiasDesc,
  HeadProfile,
  Avatar,
  Name,
  Medalhas,
  MedalhaTitle,
  Pontos,
  PontosTitle,
  PontosNumero,
} from './styles';

import fotoAvatar from '../../../assets/img/avatar.png';
import noticiaPlaceholder from '../../../assets/img/noticias-placeholder.jpg';
import Brasao from '../../../assets/img/brasao.png';
import MedalhaUm from '../../../assets/img/medalha1.png';
import MedalhaDois from '../../../assets/img/medalha2.png';
import MedalhaTres from '../../../assets/img/medalha3.png';
import MedalhaQuatro from '../../../assets/img/medalha4.png';
import MedalhaCinco from '../../../assets/img/medalha5.png';

function Profile({ profile }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Perfil</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        <HeadProfile>
          <Avatar source={{ uri: profile.avatar_urls.full }} />
          <Name>{profile.name}</Name>
          <Pontos>
            <PontosTitle>Pontos</PontosTitle>
            <PontosNumero>1000</PontosNumero>
          </Pontos>
        </HeadProfile>
        <Medalhas>
          <MedalhaTitle>Suas medalhas</MedalhaTitle>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={MedalhaUm}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
            <Image
              source={MedalhaDois}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
            <Image
              source={MedalhaTres}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
            <Image
              source={MedalhaQuatro}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={MedalhaCinco}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
            <Image
              source={MedalhaDois}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
            <Image
              source={MedalhaTres}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
            <Image
              source={MedalhaUm}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
          </View>
        </Medalhas>
      </Container>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(Profile);
