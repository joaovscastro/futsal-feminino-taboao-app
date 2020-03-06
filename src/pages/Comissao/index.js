import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import HTML from 'react-native-render-html';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import api from '../../services/api';
import Lottie from 'lottie-react-native';

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
  Foto,
  ElencoLista,
  ElencoNome,
  ElencoNumero,
  BackButton,
  BackButtonContent,
  Loadcontent,
  LoadcontentText,
} from './styles';

import BolaLoad from '../../../bola-load.json';
import fotoAvatar from '../../../assets/img/avatar.png';
import noticiaPlaceholder from '../../../assets/img/noticias-placeholder.jpg';
import Brasao from '../../../assets/img/brasao.png';

export default function Comissao({ navigation }) {
  const [loading, Setloading] = useState(false);
  const [elenco, Setelenco] = useState([]);

  async function loadElenco() {
    Setloading(true);
    const response = await api.get('sportspress/v2/staff?_embed&per_page=30');

    const data = response.data.map(jogadora => ({
      idJogadora: jogadora.id,
      nomeJogadora: jogadora.title.rendered,
      descJogadora: jogadora.content.rendered,
      fotoJogadora: jogadora._embedded['wp:featuredmedia'][0].source_url,
    }));

    Setelenco(data);
    Setloading(false);
  }

  useEffect(() => {
    loadElenco();
  }, []);

  handleNavigateElenco = elencosingle => {
    navigation.navigate('ElencoSingle', { elencosingle });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fc1936' }}>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonContent>
            <Icon name="chevron-left" size={30} />
          </BackButtonContent>
        </BackButton>
        <HeaderTexts>
          <HeaderTextName>Comissão Técnica</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        {loading ? (
          <Loadcontent>
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
            <LoadcontentText>Carregando...</LoadcontentText>
          </Loadcontent>
        ) : (
          <FlatList
            data={elenco}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ElencoLista>
                <Foto source={{ uri: item.fotoJogadora }} />

                <ElencoNome>{item.nomeJogadora}</ElencoNome>
                <HTML
                  tagsStyles={{
                    p: {
                      fontFamily: 'SF Pro Text',
                      fontWeight: 'normal',
                      fontSize: 11,
                      textAlign: 'center',
                      color: '#171717',
                      opacity: 0.8,
                    },
                  }}
                  html={item.descJogadora}
                />
              </ElencoLista>
            )}
            numColumns={3}
          />
        )}
      </Container>
    </SafeAreaView>
  );
}

const stylesDesc = StyleSheet.create({
  p: {
    height: 20,
    fontSize: 14,
    margin: 0,
    padding: 0,
    color: '#666666',
  },
});
