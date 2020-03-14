import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, Image, FlatList } from 'react-native';

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

export default function Elenco({ navigation }) {
  const [loading, Setloading] = useState(false);
  const [elenco, Setelenco] = useState([]);

  async function loadElenco() {
    Setloading(true);
    const response = await api.get('sportspress/v2/players?_embed&per_page=30');

    const data = response.data.map(jogadora => ({
      idJogadora: jogadora.id,
      nomeJogadora: jogadora.title.rendered,
      descJogadora: jogadora.content.rendered,
      numeroJogadora: jogadora.number,
      nacionalidadeJogadora: jogadora.nationalities,
      golsJogadora: jogadora.statistics,
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
        <BackButton underlayColor="#E71531" onPress={() => navigation.goBack()}>
          <BackButtonContent>
            <Icon name="chevron-left" size={30} color="#fc1936" />
          </BackButtonContent>
        </BackButton>
        <HeaderTexts>
          <HeaderTextName>Elenco</HeaderTextName>
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
            renderItem={({ item }) => (
              <ElencoLista
                underlayColor="#f3f3f3"
                onPress={() => handleNavigateElenco(item)}
              >
                <Foto source={{ uri: item.fotoJogadora }} />

                <ElencoNome>{item.nomeJogadora}</ElencoNome>
              </ElencoLista>
            )}
            numColumns={3}
          />
        )}
      </Container>
    </SafeAreaView>
  );
}
