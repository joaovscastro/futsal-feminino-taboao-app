import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, Image, Alert } from 'react-native';
import { format, parseJSON } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

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
  JogoContent,
  JogoTimes,
  JogoInfo,
  TimeName,
  JogoDetalhes,
  JogoDetalhesTitle,
  Elenco,
  ElencoFoto,
  ElencoName,
  ElencoContent,
  Noticias,
  NoticiasImg,
  NoticiasTitle,
  NoticiasDesc,
  JogoDetalhesView,
  JogoInfoTime,
  JogoInfoData,
  JogoLogo,
  MoreBtn,
  MoreBtnText,
  MoreElenco,
  MoreElencoText,
} from './styles';

import LoadNews from '../../components/LoadNews';
import LoadDestaque from '../../components/LoadDestaque';
import LoadMomentos from '../../components/LoadMomentos';
import LoadJogo from '../../components/LoadJogo';
import LoadElenco from '../../components/LoadElenco';

import api from '../../services/api';

import fotoAvatar from '../../../assets/img/perfil-teste.jpg';
import noticiaPlaceholder from '../../../assets/img/noticias-placeholder.jpg';
import Brasao from '../../../assets/img/brasao.png';
import Joao from '../../../assets/img/joao.jpg';
import Img1 from '../../../assets/img/img1.jpg';
import Img2 from '../../../assets/img/img2.jpg';
import Img3 from '../../../assets/img/img3.jpg';
import Img4 from '../../../assets/img/img4.jpg';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

function Home({ profile, navigation }) {
  console.tron.log(profile);
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
    if (profile.user_login === profile.name) {
      Alert.alert('Completar perfil', 'Complete seu perfil');
    }
    Setdestaqueload(true);
    Setmelhoresload(true);
    Setelencoload(true);
    Setnewsload(true);

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

    const beibe = await api.get('buddypress/v1/activity/1');
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
          <Avatar source={{ uri: profile.avatar_urls.thumb }} />
        </AvatarContent>
      </Header>
      <Container>
        <Title>Destaque</Title>

        {destaqueload ? (
          <LoadDestaque />
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
          <LoadMomentos />
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
        <View></View>
        {proxjogo.map(jogo => (
          <UltimoJogo key={jogo.id}>
            <MoreBtn>
              <MoreBtnText>Próximo jogo</MoreBtnText>
            </MoreBtn>
            <JogoTitulo>{jogo.title.rendered}</JogoTitulo>
            <JogoData>{jogo.dateFormatted}</JogoData>
          </UltimoJogo>
        ))}

        <Title>Elenco</Title>
        {elencoload ? (
          <LoadElenco />
        ) : (
          <>
            <Elenco horizontal={true} showsHorizontalScrollIndicator={false}>
              {elenco.map(player => (
                <ElencoContent
                  key={player.idJogadora}
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
          <LoadNews />
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
                  <NoticiasDesc>{noticia.excerpt.rendered}</NoticiasDesc>
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
