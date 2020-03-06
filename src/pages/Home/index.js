import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';
import { format, parseJSON } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

import {
  Header,
  HeaderTexts,
  HeaderTextName,
  HeaderTextDesc,
  AvatarContent,
  Avatar,
  Container,
  Title,
  Destaque,
  DestaqueBg,
  DestaqueTitle,
  MelhoresMomentos,
  MelhoresMomentosItem,
  MelhoresMomentosImg,
  MelhoresMomentosTitle,
  UltimoJogo,
  JogoTitulo,
  JogoData,
  Elenco,
  ElencoFoto,
  ElencoName,
  ElencoContent,
  Noticias,
  NoticiasImg,
  NoticiasTitle,
  NoticiasDesc,
  MoreBtn,
  MoreBtnText,
  MoreElenco,
  MoreElencoText,
} from './styles';

import LoadNews from '../../components/LoadNews';
import LoadDestaque from '../../components/LoadDestaque';
import LoadMomentos from '../../components/LoadMomentos';
import LoadElenco from '../../components/LoadElenco';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

function Home({ profile, navigation }) {
  // Loading
  const [destaqueload, Setdestaqueload] = useState(false);
  const [melhoresload, Setmelhoresload] = useState(false);
  const [elencoload, Setelencoload] = useState(false);
  const [newsload, Setnewsload] = useState(false);
  const [loading, Setloading] = useState(false);

  const [destaques, Setdestaques] = useState([]);
  const [melhoresmomentos, Setmelhoresmomentos] = useState([]);
  const [noticias, Setnoticias] = useState([]);
  const [elenco, Setelenco] = useState([]);
  const [proxjogo, Setproxjogo] = useState([]);

  async function loadDestaque() {
    Setdestaqueload(true);
    Setmelhoresload(true);
    Setelencoload(true);
    Setnewsload(true);
    Setloading(true);

    const responseDestaques = await api.get(
      'wp/v2/posts?categories=26&per_page=1'
    );
    Setdestaques(responseDestaques.data);
    Setdestaqueload(false);

    const responseMelhores = await api.get(
      'wp/v2/posts?categories=27&per_page=3'
    );
    Setmelhoresmomentos(responseMelhores.data);
    Setmelhoresload(false);

    const responseJogo = await api.get('sportspress/v2/events?per_page=1');

    const dataJogo = responseJogo.data.map(jogo => ({
      ...jogo,

      dateFormatted: format(
        utcToZonedTime(parseJSON(jogo.date)),
        "dd 'de' MMMM 'de' yyyy' às 'HH:mm'h'",
        { timeZone: 'America/Sao_Paulo', locale: pt }
      ),
    }));
    Setproxjogo(dataJogo);
    Setloading(false);

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
    Setelencoload(false);

    const responseNoticias = await api.get(
      'wp/v2/posts?categories=1&per_page=3'
    );
    Setnoticias(responseNoticias.data);
    Setnewsload(false);
  }

  useEffect(() => {
    loadDestaque();
  }, []);

  handleNavigate = noticiasingle => {
    navigation.navigate('NewsSingle', { noticiasingle });
  };

  handleNavigateElenco = elencosingle => {
    navigation.navigate('ElencoSingle', { elencosingle });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Olá {profile.name}</HeaderTextName>
          <HeaderTextDesc>O que você quer fazer hoje?</HeaderTextDesc>
        </HeaderTexts>
        <AvatarContent>
          <Avatar source={{ uri: profile.m_avatar }} />
        </AvatarContent>
      </Header>
      <Container showsVerticalScrollIndicator={false}>
        <Title>Destaque</Title>

        {destaqueload ? (
          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <LoadDestaque />
          </View>
        ) : (
          <>
            {destaques.map(destaque => (
              <Destaque
                key={destaque.id}
                onPress={() => handleNavigate(destaque)}
              >
                <DestaqueBg
                  source={{ uri: destaque.jetpack_featured_media_url }}
                >
                  <DestaqueTitle>{destaque.title.rendered}</DestaqueTitle>
                </DestaqueBg>
              </Destaque>
            ))}
          </>
        )}

        <Title>Melhores momentos</Title>
        {melhoresload ? (
          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <LoadMomentos />
          </View>
        ) : (
          <>
            <MelhoresMomentos
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {melhoresmomentos.map(momento => (
                <MelhoresMomentosItem
                  key={momento.id}
                  underlayColor="#ffffff"
                  onPress={() => handleNavigate(momento)}
                >
                  <View>
                    <MelhoresMomentosImg
                      source={{ uri: momento.jetpack_featured_media_url }}
                    />
                    <MelhoresMomentosTitle>
                      {momento.title.rendered}
                    </MelhoresMomentosTitle>
                  </View>
                </MelhoresMomentosItem>
              ))}
            </MelhoresMomentos>
          </>
        )}

        <UltimoJogo>
          <MoreBtn>
            <MoreBtnText>Próximo jogo</MoreBtnText>
          </MoreBtn>
          {loading ? (
            <View style={{ margin: 15 }}>
              <ActivityIndicator size={25} color="#ec2840" />
            </View>
          ) : (
            <>
              {proxjogo.map(jogo => (
                <View key={jogo.id}>
                  <JogoTitulo>{jogo.title.rendered}</JogoTitulo>
                  <JogoData>{jogo.dateFormatted}</JogoData>
                </View>
              ))}
            </>
          )}
        </UltimoJogo>

        <Title>Elenco</Title>
        {elencoload ? (
          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <LoadElenco />
          </View>
        ) : (
          <>
            <Elenco horizontal={true} showsHorizontalScrollIndicator={false}>
              {elenco.map(player => (
                <ElencoContent
                  key={player.idJogadora}
                  underlayColor="#f3f3f3"
                  onPress={() => handleNavigateElenco(player)}
                >
                  <ElencoFoto
                    source={{
                      uri: player.fotoJogadora,
                    }}
                  />
                  <ElencoName>{player.nomeJogadora}</ElencoName>
                </ElencoContent>
              ))}
            </Elenco>
            <MoreElenco onPress={() => navigation.navigate('Elenco')}>
              <MoreElencoText>Ver elenco</MoreElencoText>
            </MoreElenco>
          </>
        )}
        <Title>Notícias</Title>
        {newsload ? (
          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <LoadNews />
          </View>
        ) : (
          <>
            {noticias.map(noticia => (
              <Noticias
                key={noticia.id}
                underlayColor="#ffffff"
                onPress={() => handleNavigate(noticia)}
              >
                <NoticiasImg
                  source={{ uri: noticia.jetpack_featured_media_url }}
                />
                <View style={{ flex: 1 }}>
                  <NoticiasTitle>{noticia.title.rendered}</NoticiasTitle>
                </View>
                <View>
                  <Icon name="chevron-right" size={30} color="#C4C4C4" />
                </View>
              </Noticias>
            ))}
          </>
        )}
      </Container>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(Home);
