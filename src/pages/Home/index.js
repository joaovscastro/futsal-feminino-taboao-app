import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';

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

export default function Home({ navigation }) {
  const [loading, Setloading] = useState(false);
  const [destaques, Setdestaques] = useState([]);
  const [melhoresmomentos, Setmelhoresmomentos] = useState([]);
  const [noticias, Setnoticias] = useState([]);
  const [teste, Setteste] = useState([]);

  async function loadDestaque() {
    Setloading(true);
    const responseDestaques = await api.get(
      'wp/v2/posts?categories=26&per_page=1'
    );
    Setdestaques(responseDestaques.data);
    console.log('destaque', responseDestaques.data);

    const responseMelhores = await api.get(
      'wp/v2/posts?categories=27&per_page=3'
    );
    Setmelhoresmomentos(responseMelhores.data);
    console.log('melhores', responseMelhores.data);

    const responseNoticias = await api.get(
      'wp/v2/posts?categories=1&per_page=3'
    );
    Setnoticias(responseNoticias.data);
    console.log('melhores', responseNoticias.data);

    const response = await api.get('sportspress/v2/players?_embed');

    const data = response.data.map(product => ({
      idJogadora: product.id,
      nomeJogadora: product.title.rendered,
      descJogadora: product.content.rendered,
      numeroJogadora: product.number,
      nacionalidadeJogadora: product.nationalities,
      golsJogadora: product.statistics,
      fotoJogadora: product._embedded['wp:featuredmedia'][0].source_url,
    }));

    Setteste(data);
    Setloading(false);
  }

  useEffect(() => {
    loadDestaque();
  }, []);

  function Testee() {
    console.log(teste);
  }

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
          <HeaderTextName>Olá João</HeaderTextName>
          <HeaderTextDesc>O que você quer fazer hoje?</HeaderTextDesc>
        </HeaderTexts>
        <AvatarContent>
          <Avatar source={Joao} />
        </AvatarContent>
      </Header>
      <Container>
        {loading ? (
          <>
            <Title>Destaque</Title>
            <LoadDestaque />
            <Title>Melhores momentos</Title>
            <LoadMomentos />
            <View style={{ paddingTop: 20 }} />
            <LoadJogo />
            <Title>Elenco</Title>
            <LoadElenco />
            <Title>Notícias</Title>
            <LoadNews />
          </>
        ) : (
          <>
            <Title>Destaque</Title>

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
            <Title>Melhores momentos</Title>
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
              <MoreBtn>
                <MoreBtnText>Próximo jogo</MoreBtnText>
              </MoreBtn>
              <JogoTitulo>Campeonato Paulista</JogoTitulo>

              <JogoDetalhesView>
                <JogoDetalhes underlayColor="#f3f3f3">
                  <JogoDetalhesTitle>Ver jogos</JogoDetalhesTitle>
                </JogoDetalhes>
              </JogoDetalhesView>
            </UltimoJogo>
            <Title>Elenco</Title>
            <Elenco horizontal={true} showsHorizontalScrollIndicator={false}>
              {teste.map(jogadora => (
                <ElencoContent
                  key={jogadora.idJogadora}
                  onPress={() => handleNavigateElenco(jogadora)}
                >
                  <ElencoFoto
                    source={{
                      uri: jogadora.fotoJogadora,
                    }}
                  />
                  <ElencoName>{jogadora.nomeJogadora}</ElencoName>
                </ElencoContent>
              ))}
            </Elenco>
            <MoreElenco onPress={() => navigation.navigate('Elenco')}>
              <MoreElencoText>Ver elenco</MoreElencoText>
            </MoreElenco>
            <Title>Notícias</Title>
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
