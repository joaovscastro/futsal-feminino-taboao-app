import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import api from '../../services/api';
import Lottie from 'lottie-react-native';

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

import fotoAvatar from '../../../assets/img/perfil-teste.jpg';
import noticiaPlaceholder from '../../../assets/img/noticias-placeholder.jpg';
import Brasao from '../../../assets/img/brasao.png';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

export default function JogosSingle({ navigation }) {
  const jogosingle = navigation.getParam('jogosingle');
  const taboaoId = jogosingle.teams[0];
  const adversarioId = jogosingle.teams[1];
  const campId = jogosingle.leagues;
  const localId = jogosingle.venues;
  const [taboao, Settaboao] = useState([(nome = ''), (logoUrl = '')]);
  const [adversario, Setadversario] = useState([(nome = ''), (logoUrl = '')]);
  const [loading, Setloading] = useState(false);
  const [camp, Setcamp] = useState([]);
  const [local, Setlocal] = useState([]);

  async function loadTimes() {
    Setloading(true);
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

    Setloading(false);
  }

  useEffect(() => {
    loadTimes();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonContent>
            <Icon name="chevron-left" size={30} />
          </BackButtonContent>
        </BackButton>
        <HeaderTexts>
          <HeaderTextName>Taboão x Leoas</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        {loading ? (
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
            <Text style={{ color: '#666', fontSize: 11 }}>Carregando...</Text>
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
                    {jogosingle.results[taboaoId].goals} x{' '}
                    {jogosingle.results[adversarioId].goals}
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
                <Data>{jogosingle.dateFormatted}</Data>
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
                  {jogosingle.horaFormatted}
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
                  <EscalacaoDadosText style={{ flex: 1, textAlign: 'center' }}>
                    Gols
                  </EscalacaoDadosText>
                  <EscalacaoDadosText style={{ flex: 1, textAlign: 'center' }}>
                    Assistências
                  </EscalacaoDadosText>
                  <EscalacaoDadosText style={{ flex: 1, textAlign: 'center' }}>
                    Amarelos
                  </EscalacaoDadosText>
                  <EscalacaoDadosText style={{ flex: 1, textAlign: 'center' }}>
                    Vermelhos
                  </EscalacaoDadosText>
                </View>
                {jogosingle.performance[taboaoId].map(item => (
                  <View style={{ flexDirection: 'row' }} key={taboaoId}>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      {item.goals}
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      {item.assists}
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      {item.yellowcards}
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      {item.redcards}
                    </EscalacaoDadosText>
                  </View>
                ))}
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
                  <EscalacaoDadosText style={{ flex: 1, textAlign: 'center' }}>
                    Gols
                  </EscalacaoDadosText>
                  <EscalacaoDadosText style={{ flex: 1, textAlign: 'center' }}>
                    Assistências
                  </EscalacaoDadosText>
                  <EscalacaoDadosText style={{ flex: 1, textAlign: 'center' }}>
                    Amarelos
                  </EscalacaoDadosText>
                  <EscalacaoDadosText style={{ flex: 1, textAlign: 'center' }}>
                    Vermelhos
                  </EscalacaoDadosText>
                </View>
                {jogosingle.performance[adversarioId].map(item => (
                  <View style={{ flexDirection: 'row' }} key={taboaoId}>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      {item.goals}
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      {item.assists}
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      {item.yellowcards}
                    </EscalacaoDadosText>
                    <EscalacaoDadosText
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      {item.redcards}
                    </EscalacaoDadosText>
                  </View>
                ))}
              </EscalacaoDados>
            </Escalacao>
            <Disclaimer>
              Podem ocorrer divergências nos dados mostrados.
            </Disclaimer>
          </>
        )}
      </Container>
    </SafeAreaView>
  );
}
