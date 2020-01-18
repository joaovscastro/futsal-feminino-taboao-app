import React from 'react';
import { View, SafeAreaView } from 'react-native';

import { Header, HeaderTexts, HeaderTextName, HeaderTextDesc, SearchContent, SearchBtn,
  Container, Noticias, NoticiasImg, NoticiasTitle, NoticiasDesc } from './styles';

import fotoAvatar  from "../../../assets/img/avatar.png";
import noticiaPlaceholder from "../../../assets/img/noticias-placeholder.jpg";
import Brasao from "../../../assets/img/brasao.png";

import Img1 from "../../../assets/img/img1.jpg";
import Img2 from "../../../assets/img/img2.jpg";
import Img3 from "../../../assets/img/img3.jpg";

import Icon from "react-native-vector-icons/MaterialIcons";
Icon.loadFont()

export default function News({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Notícias</HeaderTextName>
        </HeaderTexts>
        <SearchBtn>
        <SearchContent>
          <Icon name="search" size={20} color="#000000" />
        </SearchContent>
        </SearchBtn>
      </Header>
      <Container>
    <Noticias underlayColor="#ffffff" onPress={() => navigation.navigate('NewsSingle')}>
    <NoticiasImg source={Img1} />
    <View style={{ flex: 1 }}>
      <NoticiasTitle>Lorem ipsum in dolor</NoticiasTitle>
      <NoticiasDesc>Lorem ipsum in dolor</NoticiasDesc>
    </View>
    <View>
      <Icon name="chevron-right" size={30} color="#C4C4C4" />
    </View>
  </Noticias>
  <Noticias underlayColor="#ffffff">
    <NoticiasImg source={Img2} />
    <View style={{ flex: 1 }}>
      <NoticiasTitle>Lorem ipsum in dolor</NoticiasTitle>
      <NoticiasDesc>Lorem ipsum in dolor</NoticiasDesc>
    </View>
    <View>
      <Icon name="chevron-right" size={30} color="#C4C4C4" />
    </View>
  </Noticias>
  <Noticias underlayColor="#ffffff">
    <NoticiasImg source={Img3} />
    <View style={{ flex: 1 }}>
      <NoticiasTitle>Lorem ipsum in dolor</NoticiasTitle>
      <NoticiasDesc>Lorem ipsum in dolor</NoticiasDesc>
    </View>
    <View>
      <Icon name="chevron-right" size={30} color="#C4C4C4" />
    </View>
  </Noticias>
  </Container>
  </SafeAreaView>
  );
}
