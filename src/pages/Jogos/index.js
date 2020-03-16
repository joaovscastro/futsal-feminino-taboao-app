import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import { format, parseJSON } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Lottie from 'lottie-react-native';
import Modal from 'react-native-modal';

import api from '../../services/api';

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
  EscalacaoDados,
  EscalacaoDadosText,
  Disclaimer,
  Loadcontent,
  LoadcontentText,
  Placar,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import BolaLoad from '../../../assets/animations/bola-load.json';
import Brasao from '../../../assets/img/logo.png';

function Jogos({ navigation, profile }) {
  // Tabs
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Próximos' },
    { key: 'second', title: 'Anteriores' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  function FirstRoute() {
    return (
      <FlatList
        style={{ marginLeft: 20, marginRight: 20 }}
        data={jogos}
        keyExtractor={post => String(post.id)}
        onEndReached={() => loadJogos()}
        onEndReachedThreshold={0.1}
        onRefresh={refreshList}
        refreshing={refreshing}
        ListFooterComponent={
          loading && (
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
            <JogoTitulo>{item.nome}</JogoTitulo>
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
    );
  }

  function SecondRoute() {
    return (
      <FlatList
        style={{ marginLeft: 20, marginRight: 20 }}
        data={oldjogos}
        keyExtractor={post => String(post.id)}
        onEndReached={() => loadJogos()}
        onEndReachedThreshold={0.1}
        onRefresh={refreshList}
        refreshing={refreshing}
        ListFooterComponent={
          loading && (
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
            <JogoTitulo>{item.nome}</JogoTitulo>
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
    );
  }

  const initialLayout = { width: Dimensions.get('window').width };

  const [loading, Setloading] = useState(false);
  const [loadingdados, Setloadingdados] = useState(false);
  const [jogos, Setjogos] = useState([]);
  const [oldjogos, Setoldjogos] = useState([]);
  const [page, Setpage] = useState(1);
  const [total, Settotal] = useState(0);
  const [refreshing, Setrefreshing] = useState(false);
  const [isModalVisible, setisModalVisible] = useState(false);

  const [taboao, Settaboao] = useState([(nome = ''), (logoUrl = '')]);
  const [adversario, Setadversario] = useState([(nome = ''), (logoUrl = '')]);
  const [camp, Setcamp] = useState([]);
  const [local, Setlocal] = useState([]);

  const [dadosjogo, setDadosjogo] = useState([]);

  async function loadJogos(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return;

    Setloading(true);

    const responseJogos = await api.get(
      `sportspress/v2/events?_embed&page=${pageNumber}&per_page=10&order=asc`
    );

    const totalItems = responseJogos.headers['x-wp-totalpages'];

    Settotal(totalItems);

    const shouldFilter = true;
    const ProximosJogos = {
      jogos: responseJogos.data
        .filter(jogo => (shouldFilter ? jogo.status === 'future' : true))
        .map(jogo => {
          return {
            ...jogo,
            // logoAdv: jogo._embedded['wp:featuredmedia'][0].source_url,
            id: jogo.id,
            nome: jogo.title.rendered,
            horaFormatted: format(
              utcToZonedTime(parseJSON(jogo.date)),
              "HH:mm'h",
              {
                timeZone: 'America/Sao_Paulo',
                locale: pt,
              }
            ),
            dateFormatted: format(
              utcToZonedTime(parseJSON(jogo.date)),
              "dd 'de' MMMM 'de' yyyy",
              { timeZone: 'America/Sao_Paulo', locale: pt }
            ),
          };
        }),
    };

    const OldJogos = {
      jogos: responseJogos.data
        .filter(jogo => (shouldFilter ? jogo.status === 'publish' : true))
        .map(jogo => {
          return {
            ...jogo,
            // logoAdv: jogo._embedded['wp:featuredmedia'][0].source_url,
            id: jogo.id,
            nome: jogo.title.rendered,
            horaFormatted: format(
              utcToZonedTime(parseJSON(jogo.date)),
              "HH:mm'h",
              {
                timeZone: 'America/Sao_Paulo',
                locale: pt,
              }
            ),
            dateFormatted: format(
              utcToZonedTime(parseJSON(jogo.date)),
              "dd 'de' MMMM 'de' yyyy",
              { timeZone: 'America/Sao_Paulo', locale: pt }
            ),
          };
        }),
    };

    Setjogos(
      shouldRefresh ? ProximosJogos.jogos : [...jogos, ...ProximosJogos.jogos]
    );
    Setoldjogos(
      shouldRefresh ? OldJogos.jogos : [...oldjogos, ...OldJogos.jogos]
    );
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

  loadDetalhes = async jogosingle => {
    setisModalVisible(true);
    Setloadingdados(true);

    const taboaoId = jogosingle.teams[0];
    const adversarioId = jogosingle.teams[1];

    const placarTaboao = jogosingle.results[taboaoId].goals;
    const placarAdversario = jogosingle.results[adversarioId].goals;

    const taboaoGols = jogosingle.performance[taboaoId][0].goals;
    const taboaoAss = jogosingle.performance[taboaoId][0].assists;
    const taboaoAmar = jogosingle.performance[taboaoId][0].yellowcards;
    const taboaoVerm = jogosingle.performance[taboaoId][0].redcards;

    const adversarioGols = jogosingle.performance[adversarioId][0].goals;
    const adversarioAss = jogosingle.performance[adversarioId][0].assists;
    const adversarioAmar = jogosingle.performance[adversarioId][0].yellowcards;
    const adversarioVerm = jogosingle.performance[adversarioId][0].redcards;

    setDadosjogo({
      ...jogosingle,
      taboaoGols,
      taboaoAss,
      taboaoAmar,
      taboaoVerm,
      adversarioGols,
      adversarioAss,
      adversarioAmar,
      adversarioVerm,
      placarTaboao,
      placarAdversario,
    });

    const campId = jogosingle.leagues;
    const localId = jogosingle.venues;

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
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fc1936' }}>
        <Header>
          <HeaderTexts>
            <HeaderTextName>Jogos</HeaderTextName>
          </HeaderTexts>
        </Header>
        <Container>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={props => (
              <TabBar
                {...props}
                activeColor="#fc1936"
                inactiveColor="#666"
                indicatorStyle={{ backgroundColor: '#fc1936' }}
                labelStyle={{
                  fontFamily: 'SF Pro Text',
                  fontWeight: 'normal',
                  fontSize: 12,
                  letterSpacing: 1,
                }}
                style={{
                  backgroundColor: '#fff',
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                }}
              />
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
              <LoadcontentText>Carregando dados...</LoadcontentText>
            </Loadcontent>
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
                    <Placar>
                      {dadosjogo.placarTaboao} x {dadosjogo.placarAdversario}
                    </Placar>
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
                  <Data>{dadosjogo.dateFormatted}</Data>
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
                  <DataTextInfo style={{ flex: 1 }}>
                    {dadosjogo.horaFormatted}
                  </DataTextInfo>
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
                      {dadosjogo.taboaoGols}
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      {dadosjogo.taboaoAss}
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      {dadosjogo.taboaoAmar}
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      {dadosjogo.taboaoVerm}
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
                      {dadosjogo.adversarioGols}
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      {dadosjogo.adversarioAss}
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      {dadosjogo.adversarioAmar}
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      {dadosjogo.adversarioVerm}
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

const mapStateToProps = state => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(Jogos);
