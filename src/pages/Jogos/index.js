import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, Text, ScrollView } from 'react-native';
import { format, parseJSON } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';
import Lottie from 'lottie-react-native';

import Modal from 'react-native-modal';

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
  Title,
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
  Disclaimer,
} from './styles';

import BolaLoad from '../../../bola-load.json';

import fotoAvatar from '../../../assets/img/avatar.png';
import noticiaPlaceholder from '../../../assets/img/noticias-placeholder.jpg';
import Brasao from '../../../assets/img/brasao.png';

export default function Jogos({ navigation }) {
  const [loading, Setloading] = useState(false);
  const [loadingdados, Setloadingdados] = useState(false);
  const [jogos, Setjogos] = useState([]);
  const [page, Setpage] = useState(1);
  const [total, Settotal] = useState(0);
  const [refreshing, Setrefreshing] = useState(false);
  const [isModalVisible, setisModalVisible] = useState(false);

  const [teste, setTeste] = useState('');

  const [taboao, Settaboao] = useState([(nome = ''), (logoUrl = '')]);
  const [adversario, Setadversario] = useState([(nome = ''), (logoUrl = '')]);
  const [camp, Setcamp] = useState([]);
  const [local, Setlocal] = useState([]);

  const [dadosjogo, setDadosjogo] = useState([]);

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

  //handleNavigate = jogosingle => {
  // navigation.navigate('JogosSingle', { jogosingle });
  //};

  loadDetalhes = async jogosingle => {
    setisModalVisible(true);
    Setloadingdados(true);

    const taboaoId = jogosingle.teams[0];
    const adversarioId = jogosingle.teams[1];

    const placarTaboao = jogosingle.results[taboaoId].goals;
    const placarAdversario = jogosingle.results[adversarioId].goals;

    setDadosjogo({
      placarTaboao,
      placarAdversario,
    });

    const campId = jogosingle.leagues;
    const localId = jogosingle.venues;

    setTeste(taboaoId);

    const responseTaboao = await api.get(
      `sportspress/v2/teams/${taboaoId}?_embed`
    );

    Settaboao({
      nome: responseTaboao.data.title.rendered,
      logoUrl: responseTaboao.data._embedded['wp:featuredmedia'][0].source_url,
    });

    const responseAdversario = await api.get(
      `sportspress/v2/teams/${adversarioId}?_embed`
    );
    Setadversario({
      nome: responseAdversario.data.title.rendered,
      logoUrl:
        responseAdversario.data._embedded['wp:featuredmedia'][0].source_url,
    });

    const responseCamp = await api.get(`sportspress/v2/leagues/${campId}`);
    Setcamp(responseCamp.data);

    const responseLocal = await api.get(`sportspress/v2/venues/${localId}`);
    Setlocal(responseLocal.data);

    Setloadingdados(false);
  };

  toggleModalPayment = () => {
    setisModalVisible(false);
  };

  toggleModalOpenPayment = () => {
    setisModalVisible(true);
  };

  return (
    <>
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
                    onPress={() => loadDetalhes(item)}
                  >
                    <JogoDetalhesTitle>Ver detalhes</JogoDetalhesTitle>
                  </JogoDetalhes>
                </JogoDetalhesView>
              </UltimoJogo>
            )}
          />
        </Container>
      </SafeAreaView>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => toggleModalPayment()}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: '#f3f3f3',
            borderRadius: 8,
            marginTop: 200,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          {loadingdados ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50,
              }}
            >
              <Lottie
                resizeMode="contain"
                autoSize
                source={BolaLoad}
                autoPlay
                loop={true}
                style={{ width: 80, height: 80 }}
              />
              <Text style={{ marginBottom: 30 }}>Carregando dados...</Text>
            </View>
          ) : (
            <>
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
                <JogoContent>
                  <JogoTimes>
                    <JogoLogo
                      source={{
                        uri: taboao.logoUrl,
                      }}
                      resizeMode="contain"
                    />
                    <TimeName>{taboao.nome}</TimeName>
                  </JogoTimes>
                  <JogoInfo>
                    <JogoInfoTime>
                      {dadosjogo.placarTaboao} x {dadosjogo.placarAdversario}
                    </JogoInfoTime>
                  </JogoInfo>
                  <JogoTimes>
                    <JogoLogo
                      source={{
                        uri: adversario.logoUrl,
                      }}
                      resizeMode="contain"
                    />
                    <TimeName>{adversario.nome}</TimeName>
                  </JogoTimes>
                </JogoContent>
              </UltimoJogo>
              <Title>Detalhes</Title>
              <View>
                <View style={{ backgroundColor: '#000000' }}>
                  <Data> 12/12/12</Data>
                </View>
                <View
                  style={{ flexDirection: 'row', backgroundColor: '#eeeeee' }}
                >
                  <DataText style={{ flex: 1 }}>Horário</DataText>
                  <DataText style={{ flex: 1 }}>Campeonato</DataText>
                  <DataText style={{ flex: 1 }}>Temporada</DataText>
                </View>
                <View
                  style={{ flexDirection: 'row', backgroundColor: '#ffffff' }}
                >
                  <DataTextInfo style={{ flex: 1 }}>12/12/12</DataTextInfo>
                  <DataTextInfo style={{ flex: 1 }}>{camp.name}</DataTextInfo>
                  <DataTextInfo style={{ flex: 1 }}>2020</DataTextInfo>
                </View>
                <View style={{ backgroundColor: '#000000' }}>
                  <Data>{local.name}</Data>
                </View>
              </View>

              <Title>Performance</Title>

              <Escalacao>
                <EscalacaoJogadora>
                  <EscalacaoJogadoraAvatar
                    source={{
                      uri: taboao.logoUrl,
                    }}
                    resizeMode="contain"
                  />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <EscalacaoJogadoraNome>{taboao.nome}</EscalacaoJogadoraNome>
                  </View>
                </EscalacaoJogadora>

                <EscalacaoDados>
                  <View style={{ flexDirection: 'row' }}>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      Gols
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      Assistências
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      Amarelos
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      Vermelhos
                    </EscalacaoDadosText>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      10
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      10
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      10
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      10
                    </EscalacaoDadosText>
                  </View>
                </EscalacaoDados>
              </Escalacao>

              <Escalacao>
                <EscalacaoJogadora>
                  <EscalacaoJogadoraAvatar
                    source={{
                      uri: adversario.logoUrl,
                    }}
                    resizeMode="contain"
                  />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <EscalacaoJogadoraNome>
                      {adversario.nome}
                    </EscalacaoJogadoraNome>
                  </View>
                </EscalacaoJogadora>

                <EscalacaoDados>
                  <View style={{ flexDirection: 'row' }}>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      Gols
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      Assistências
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      Amarelos
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      Vermelhos
                    </EscalacaoDadosText>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      10
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      10
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      10
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      10
                    </EscalacaoDadosText>
                  </View>
                </EscalacaoDados>
              </Escalacao>
              <Escalacao>
                <EscalacaoJogadora>
                  <EscalacaoJogadoraAvatar
                    source={{
                      uri: adversario.logoUrl,
                    }}
                    resizeMode="contain"
                  />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <EscalacaoJogadoraNome>
                      {adversario.nome}
                    </EscalacaoJogadoraNome>
                  </View>
                </EscalacaoJogadora>

                <EscalacaoDados>
                  <View style={{ flexDirection: 'row' }}>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      Gols
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      Assistências
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      Amarelos
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      Vermelhos
                    </EscalacaoDadosText>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      10
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      10
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      10
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      10
                    </EscalacaoDadosText>
                  </View>
                </EscalacaoDados>
              </Escalacao>
              <Disclaimer>
                Podem ocorrer divergências nos dados mostrados.
              </Disclaimer>
            </>
          )}
        </ScrollView>
      </Modal>
    </>
  );
}
