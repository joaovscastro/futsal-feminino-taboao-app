import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import { format, parseJSON } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';
import Lottie from 'lottie-react-native';

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

import BolaLoad from '../../../bola-load.json';

import fotoAvatar from '../../../assets/img/avatar.png';
import noticiaPlaceholder from '../../../assets/img/noticias-placeholder.jpg';
import Brasao from '../../../assets/img/brasao.png';

export default function Jogos({ navigation }) {
  const [loading, Setloading] = useState(false);
  const [jogos, Setjogos] = useState([]);
  const [page, Setpage] = useState(1);
  const [total, Settotal] = useState(0);
  const [refreshing, Setrefreshing] = useState(false);

  async function loadJogos(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return;

    Setloading(true);

    const responseJogos = await api.get(
      `sportspress/v2/events?_embed&page=${pageNumber}&per_page=10`
    );

    const totalItems = responseJogos.headers['x-wp-totalpages'];

    Settotal(totalItems);

    const dataJogo = responseJogos.data.map(jogo => ({
      ...jogo,

      horaFormatted: format(utcToZonedTime(parseJSON(jogo.date)), "HH:mm'h", {
        timeZone: 'America/Sao_Paulo',
        locale: pt,
      }),
      dateFormatted: format(
        utcToZonedTime(parseJSON(jogo.date)),
        "dd 'de' MMMM 'de' yyyy",
        { timeZone: 'America/Sao_Paulo', locale: pt }
      ),
    }));

    Setjogos(shouldRefresh ? dataJogo : [...jogos, ...dataJogo]);
    Setpage(pageNumber + 1);
    Setloading(false);
  }

  useEffect(() => {
    loadJogos();
  }, []);

  async function refreshList() {
    Setrefreshing(true);

    await loadJogos(1, true);

    Setrefreshing(false);
  }

  handleNavigate = jogosingle => {
    navigation.navigate('JogosSingle', { jogosingle });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Jogos</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        <FlatList
          data={jogos}
          keyExtractor={post => String(post.id)}
          onEndReached={() => loadJogos()}
          onEndReachedThreshold={0.1}
          onRefresh={refreshList}
          refreshing={refreshing}
          ListFooterComponent={
            loading && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 30,
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
                <Text style={{ color: '#666', fontSize: 11 }}>
                  Carregando...
                </Text>
              </View>
            )
          }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
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
              <JogoTitulo>{item.title.rendered}</JogoTitulo>
              <JogoContent>
                <JogoTimes>
                  <JogoLogo source={Brasao} resizeMode="contain" />
                </JogoTimes>
                <JogoInfo>
                  <JogoInfoTime>{item.horaFormatted}</JogoInfoTime>
                  <JogoInfoData>{item.dateFormatted}</JogoInfoData>
                </JogoInfo>
                <JogoTimes>
                  <JogoLogo
                    source={{
                      uri: item._embedded['wp:featuredmedia'][0].source_url,
                    }}
                    resizeMode="contain"
                  />
                </JogoTimes>
              </JogoContent>
              <JogoDetalhesView>
                <JogoDetalhes
                  underlayColor="#f3f3f3"
                  onPress={() => handleNavigate(item)}
                >
                  <JogoDetalhesTitle>Ver detalhes</JogoDetalhesTitle>
                </JogoDetalhes>
              </JogoDetalhesView>
            </UltimoJogo>
          )}
        />
      </Container>
    </SafeAreaView>
  );
}
