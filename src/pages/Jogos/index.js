import React, { useState, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import {
  Header,
  HeaderTexts,
  HeaderTextName,
  Container,
  UltimoJogo,
  JogoTitulo,
  JogoContent,
  JogoTimes,
  JogoInfo,
  TimeName,
  JogoDetalhes,
  JogoDetalhesTitle,
  JogoDetalhesView,
  JogoInfoTime,
  JogoInfoData,
  JogoLogo,
} from './styles';

import fotoAvatar from '../../../assets/img/avatar.png';
import noticiaPlaceholder from '../../../assets/img/noticias-placeholder.jpg';
import Brasao from '../../../assets/img/brasao.png';

export default function Jogos({ navigation }) {
  const [times, Settimes] = useState([]);
  const [jogos, Setjogos] = useState([]);

  async function loadJogos() {
    const responseJogos = await api.get('sportspress/v2/events?_embed');

    console.tron.log(responseJogos);

    Setjogos(responseJogos);
  }

  useEffect(() => {
    loadJogos();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Jogos</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        <UltimoJogo
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
          }}
        >
          <JogoTitulo>Campeonato Paulista</JogoTitulo>
          <JogoContent>
            <JogoTimes>
              <JogoLogo source={Brasao} resizeMode="contain" />
              <TimeName>Taboao</TimeName>
            </JogoTimes>
            <JogoInfo>
              <JogoInfoTime>19:30</JogoInfoTime>
              <JogoInfoData>01/10/2020</JogoInfoData>
            </JogoInfo>
            <JogoTimes>
              <JogoLogo source={Brasao} resizeMode="contain" />
              <TimeName>Leoas da serra </TimeName>
            </JogoTimes>
          </JogoContent>
          <JogoDetalhesView>
            <JogoDetalhes underlayColor="#f3f3f3" onPress={() => lerDados()}>
              <JogoDetalhesTitle>Ver detalhes</JogoDetalhesTitle>
            </JogoDetalhes>
          </JogoDetalhesView>
        </UltimoJogo>

        <UltimoJogo
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
          }}
        >
          <JogoTitulo>Campeonato Paulista</JogoTitulo>
          <JogoContent>
            <JogoTimes>
              <JogoLogo source={Brasao} resizeMode="contain" />
              <TimeName>Taboao</TimeName>
            </JogoTimes>
            <JogoInfo>
              <JogoInfoTime>19:30</JogoInfoTime>
              <JogoInfoData>01/10/2020</JogoInfoData>
            </JogoInfo>
            <JogoTimes>
              <JogoLogo source={Brasao} resizeMode="contain" />
              <TimeName>Leoas da serra </TimeName>
            </JogoTimes>
          </JogoContent>
          <JogoDetalhesView>
            <JogoDetalhes underlayColor="#f3f3f3">
              <JogoDetalhesTitle>Ver detalhes</JogoDetalhesTitle>
            </JogoDetalhes>
          </JogoDetalhesView>
        </UltimoJogo>

        <UltimoJogo
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
          }}
        >
          <JogoTitulo>Campeonato Paulista</JogoTitulo>
          <JogoContent>
            <JogoTimes>
              <JogoLogo source={Brasao} resizeMode="contain" />
              <TimeName>Taboao</TimeName>
            </JogoTimes>
            <JogoInfo>
              <JogoInfoTime>19:30</JogoInfoTime>
              <JogoInfoData>01/10/2020</JogoInfoData>
            </JogoInfo>
            <JogoTimes>
              <JogoLogo source={Brasao} resizeMode="contain" />
              <TimeName>Leoas da serra </TimeName>
            </JogoTimes>
          </JogoContent>
          <JogoDetalhesView>
            <JogoDetalhes underlayColor="#f3f3f3">
              <JogoDetalhesTitle>Ver detalhes</JogoDetalhesTitle>
            </JogoDetalhes>
          </JogoDetalhesView>
        </UltimoJogo>
      </Container>
    </SafeAreaView>
  );
}
