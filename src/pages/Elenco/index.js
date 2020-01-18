import React from 'react';
import { View, SafeAreaView } from 'react-native';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
Icon.loadFont()

import { Header, HeaderTexts, HeaderTextName, HeaderTextDesc, SearchContent, SearchBtn,
  Container, Noticias, NoticiasImg, NoticiasTitle, NoticiasDesc } from './styles';

import fotoAvatar  from "../../../assets/img/avatar.png";
import noticiaPlaceholder from "../../../assets/img/noticias-placeholder.jpg";
import Brasao from "../../../assets/img/brasao.png";

export default function Elenco() {


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
    <Header>
      <HeaderTexts>
        <HeaderTextName>Jogos</HeaderTextName>
      </HeaderTexts>
    </Header>
    <Container>

</Container>
</SafeAreaView>
  );
}

