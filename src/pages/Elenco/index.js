import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native';

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
    const response = await api.get('sportspress/v2/players?_embed');

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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonContent>
            <Icon name="chevron-left" size={30} />
          </BackButtonContent>
        </BackButton>
        <HeaderTexts>
          <HeaderTextName>Elenco</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        {loading ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
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
            <Text style={{ color: '#666', fontSize: 11 }}>Carregando...</Text>
          </View>
        ) : (
          <>
            {elenco.map(player => (
              <ElencoLista
                underlayColor="#f3f3f3"
                key={player.id}
                onPress={() => handleNavigateElenco(player)}
              >
                <Foto source={{ uri: player.fotoJogadora }} />

                <ElencoNome>{player.nomeJogadora}</ElencoNome>
                <ElencoNumero>{player.numeroJogadora}</ElencoNumero>

                <Icon name="chevron-right" size={30} color="#C4C4C4" />
              </ElencoLista>
            ))}
          </>
        )}
      </Container>
    </SafeAreaView>
  );
}
