import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

import {
  Header,
  HeaderTexts,
  HeaderTextName,
  Container,
  UltimoJogo,
  JogoContent,
  JogoTimes,
  JogoInfo,
  TimeName,
  JogoInfoTime,
  JogoLogo,
  BackButton,
  BackButtonContent,
  Title,
  TitlePerformance,
  Data,
  DataText,
  DataTextInfo,
  Escalacao,
  EscalacaoJogadora,
  EscalacaoJogadoraAvatar,
  EscalacaoJogadoraNome,
  EscalacaoJogadoraPosicao,
  EscalacaoDados,
  EscalacaoDadosText,
  EscalacaoDadosNumber,
  ElencoMain,
  ElencoText,
  ElencoTextTitle,
  ElencoTextCont,
  ElencoDesc,
  ElencoDescTitle,
  Disclaimer,
} from './styles';

import fotoAvatar from '../../../assets/img/perfil-teste.jpg';
import noticiaPlaceholder from '../../../assets/img/noticias-placeholder.jpg';
import Brasao from '../../../assets/img/brasao.png';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

export default function ElencoSingle({ navigation }) {
  const jogadoraInfo = navigation.getParam('elencosingle');
  console.log(jogadoraInfo.golsJogadora);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonContent>
            <Icon name="chevron-left" size={30} />
          </BackButtonContent>
        </BackButton>
        <HeaderTexts>
          <HeaderTextName>{jogadoraInfo.nomeJogadora}</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        <ElencoMain>
          <Image
            source={{ uri: jogadoraInfo.fotoJogadora }}
            style={{ width: 181, height: 181, borderRadius: 8 }}
          />
          <ElencoText>
            <ElencoTextTitle>Nacionalidade</ElencoTextTitle>
            <ElencoTextCont>
              {jogadoraInfo.nacionalidadeJogadora}
            </ElencoTextCont>
            <ElencoTextTitle>Número</ElencoTextTitle>
            <ElencoTextCont>{jogadoraInfo.numeroJogadora}</ElencoTextCont>
            <ElencoTextTitle>Time</ElencoTextTitle>
            <ElencoTextCont>Taboão da Serra</ElencoTextCont>
          </ElencoText>
        </ElencoMain>
        <TitlePerformance>Performance</TitlePerformance>

        <View>
          <View style={{ backgroundColor: '#000000' }}>
            <Data>Temporada 2020</Data>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: '#eeeeee' }}>
            <DataText style={{ flex: 1 }}>Gols</DataText>
            <DataText style={{ flex: 1 }}>Assistências</DataText>
            <DataText style={{ flex: 1 }}>Amarelos</DataText>
            <DataText style={{ flex: 1 }}>Vermelhos</DataText>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: '#ffffff' }}>
            <DataTextInfo style={{ flex: 1 }}>
              {jogadoraInfo.golsJogadora[37][22].goals}
            </DataTextInfo>
            <DataTextInfo style={{ flex: 1 }}>
              {jogadoraInfo.golsJogadora[37][22].assists}
            </DataTextInfo>
            <DataTextInfo style={{ flex: 1 }}>
              {jogadoraInfo.golsJogadora[37][22].yellowcards}
            </DataTextInfo>
            <DataTextInfo style={{ flex: 1 }}>
              {jogadoraInfo.golsJogadora[37][22].redcards}
            </DataTextInfo>
          </View>
        </View>
        <Disclaimer>Podem ocorrer divergências nos dados mostrados.</Disclaimer>
        <ElencoDesc>
          <Title>Sobre</Title>
          <HTMLView value={jogadoraInfo.descJogadora} stylesheet={stylesDesc} />
        </ElencoDesc>
      </Container>
    </SafeAreaView>
  );
}

const stylesDesc = StyleSheet.create({
  p: {
    fontSize: 14,
    lineHeight: 15,
    color: '#666666',
  },
  a: {
    fontWeight: '300',
    color: '#D3004C',
  },
});
