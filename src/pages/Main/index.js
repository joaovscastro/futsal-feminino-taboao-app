import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { format, parseJSON } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import Svg, { Path } from 'react-native-svg';

import api from '../../services/api';

import {
  Header,
  HeaderProfile,
  HeaderName,
  HeaderNameText,
  Card,
  CardTitle,
  CardJogo,
  CardMore,
  CardMoreText,
  CardButtonMore,
  AvatarLink,
  Avatar,
  TitleNews,
  News,
  NewsImg,
  NewsTitle,
  TitleElenco,
  ElencoName,
  AboutButton,
  About,
  AboutTitle,
  LogoTaboao,
  NewsDate,
  ElencoBtn,
  ElencoNumber,
  MaisNoticias,
  MaisElenco,
  NoticiasLink,
  ElencoLink,
} from './styles';

import LoadNews from '../../components/LoadNews';
import LoadElenco from '../../components/LoadElenco';

import Logo from '../../../assets/img/logo.png';
import Bg from '../../../assets/img/bg.jpg';
import ElencoBg from '../../../assets/img/elenco.png';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

function Main({ navigation, profile }) {
  const [noticias, Setnoticias] = useState([]);
  const [jogos, Setjogos] = useState([]);
  const [loading, Setloading] = useState(false);
  const [loadingnews, Setloadingnews] = useState(false);
  const [loadingelenco, Setloadingelenco] = useState(false);

  const [elenco, Setelenco] = useState([]);

  async function loadNews() {
    Setloading(true);
    Setloadingnews(true);
    Setloadingelenco(true);

    // Jogos
    const responseJogos = await api.get(
      `sportspress/v2/events?per_page=10&order=asc`
    );

    const shouldFilter = true;
    const ProximosJogos = {
      jogos: responseJogos.data
        .filter(jogo => (shouldFilter ? jogo.status === 'future' : true))
        .map(jogo => {
          return {
            ...jogo,
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

    Setjogos(ProximosJogos.jogos);
    Setloading(false);

    // Notícias
    const responseNoticias = await api.get(
      'wp/v2/posts?categories=1&per_page=5'
    );

    const dataNews = responseNoticias.data.map(noticia => ({
      ...noticia,

      dateFormatted: format(
        utcToZonedTime(parseJSON(noticia.date)),
        "dd 'de' MMMM 'de' yyyy",
        { timeZone: 'America/Sao_Paulo', locale: pt }
      ),
    }));

    Setnoticias(dataNews);
    Setloadingnews(false);

    const responseElenco = await api.get('sportspress/v2/sponsors?_embed');

    Setelenco(responseElenco.data);
    Setloadingelenco(false);
  }

  useEffect(() => {
    loadNews();
  }, []);

  handleNavigate = noticiasingle => {
    navigation.navigate('NewsSingle', { noticiasingle });
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{
          flex: 1,
          backgroundColor: '#E71531',
        }}
      >
        <View
          style={{
            backgroundColor: '#ffffff',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Header source={Bg} resizeMode="cover">
            <SafeAreaView>
              <HeaderProfile>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <HeaderName>Olá,</HeaderName>
                  <HeaderNameText> {profile.name}</HeaderNameText>
                </View>
                <AvatarLink onPress={() => navigation.navigate('Profile')}>
                  <Avatar
                    source={{
                      uri: profile.m_avatar,
                    }}
                  />
                </AvatarLink>
              </HeaderProfile>
            </SafeAreaView>
          </Header>
          <View style={{ marginTop: -80, marginLeft: 20, marginRight: 20 }}>
            <Card>
              <View style={{ flex: 1 }}>
                <CardTitle>Próximo jogo</CardTitle>
                {loading ? (
                  <View style={{ marginTop: 29, marginBottom: 29 }}>
                    <ActivityIndicator size={20} color="#ffffff" />
                  </View>
                ) : (
                  <>
                    {jogos.length ? (
                      <>
                        <CardJogo>{jogos[0].title.rendered}</CardJogo>
                      </>
                    ) : (
                      <CardJogo>Nenhum jogo para os próximos dias</CardJogo>
                    )}
                  </>
                )}
                <CardMore onPress={() => navigation.navigate('Jogos')}>
                  <CardMoreText>Mais jogos</CardMoreText>
                  <Svg width="18" height="10" viewBox="0 0 18 10">
                    <Path
                      fill="#fff"
                      d="M12.935 0l-.851.84 3.611 3.566H0v1.188h15.695L12.084 9.16l.851.841L18 5 12.935.003V0z"
                    ></Path>
                  </Svg>
                </CardMore>
              </View>
              <CardButtonMore>
                <LogoTaboao source={Logo} resizeMode="contain" />
              </CardButtonMore>
            </Card>
          </View>
          <View>
            <TitleNews>Últimas notícias</TitleNews>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {loadingnews ? (
                <LoadNews />
              ) : (
                <>
                  {noticias.map(noticia => (
                    <News
                      key={noticia.id}
                      underlayColor="#ffffff"
                      onPress={() => handleNavigate(noticia)}
                    >
                      <NewsImg
                        source={{ uri: noticia.jetpack_featured_media_url }}
                      />
                      <NewsTitle>{noticia.title.rendered}</NewsTitle>
                      <NewsDate>{noticia.dateFormatted}</NewsDate>
                    </News>
                  ))}
                </>
              )}
              <View style={{ marginRight: 20 }} />
            </ScrollView>
          </View>
          <NoticiasLink onPress={() => navigation.navigate('News')}>
            <MaisNoticias>Ver todas as notícias</MaisNoticias>
            <Svg width="18" height="10" viewBox="0 0 18 10">
              <Path
                fill="#000"
                d="M12.935 0l-.851.84 3.611 3.566H0v1.188h15.695L12.084 9.16l.851.841L18 5 12.935.003V0z"
              ></Path>
            </Svg>
          </NoticiasLink>
        </View>
        <View>
          <ImageBackground
            source={ElencoBg}
            style={{
              width: null,
              height: 65,
              justifyContent: 'center',
              marginBottom: 10,
              marginTop: 30,
            }}
            resizeMode="cover"
          >
            <TitleElenco>Elenco</TitleElenco>
          </ImageBackground>
          <View style={{ marginLeft: 20 }}>
            <Svg width="10" height="18" viewBox="0 0 10 18">
              <Path
                fill="#fff"
                d="M10 12.935l-.84-.851-3.566 3.611V0H4.406v15.695L.84 12.084 0 12.935 5 18l4.998-5.065H10z"
              ></Path>
            </Svg>
          </View>
          <View style={{ marginTop: 30 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {loadingelenco ? (
                <View style={{ marginTop: 30 }}>
                  <LoadElenco />
                </View>
              ) : (
                <>
                  {elenco.map(item => (
                    <ElencoBtn
                      key={item.id}
                      underlayColor="#E71531"
                      onPress={() => navigation.navigate('Elenco')}
                    >
                      <ImageBackground
                        source={{
                          uri: item._embedded['wp:featuredmedia'][0].source_url,
                        }}
                        style={{
                          width: 197,
                          height: 190,
                          justifyContent: 'center',
                          alignItems: 'flex-end',
                        }}
                      >
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            marginBottom: 60,
                            marginRight: 20,
                          }}
                        >
                          <ElencoNumber>{item.url}.</ElencoNumber>

                          <View>
                            <ElencoName>{item.title.rendered}</ElencoName>
                          </View>
                        </View>
                      </ImageBackground>
                    </ElencoBtn>
                  ))}
                </>
              )}

              <View style={{ marginRight: 20 }} />
            </ScrollView>
            <ElencoLink onPress={() => navigation.navigate('Elenco')}>
              <MaisElenco>Ver elenco completo</MaisElenco>
              <Svg width="18" height="10" viewBox="0 0 18 10">
                <Path
                  fill="#fff"
                  d="M12.935 0l-.851.84 3.611 3.566H0v1.188h15.695L12.084 9.16l.851.841L18 5 12.935.003V0z"
                ></Path>
              </Svg>
            </ElencoLink>
          </View>
        </View>
        <View>
          <AboutButton onPress={() => navigation.navigate('Projeto')}>
            <About
              source={{
                uri:
                  'https://app.futsalfemininotaboao.com.br/oprojeto-home.png',
              }}
            >
              <AboutTitle>Conheça nosso</AboutTitle>
              <AboutTitle>projeto</AboutTitle>
              <View style={{ marginTop: 20 }}>
                <Svg width="28" height="20" viewBox="0 0 18 10">
                  <Path
                    fill="#fff"
                    d="M12.935 0l-.851.84 3.611 3.566H0v1.188h15.695L12.084 9.16l.851.841L18 5 12.935.003V0z"
                  ></Path>
                </Svg>
              </View>
            </About>
          </AboutButton>
        </View>
      </ScrollView>
    </>
  );
}

const mapStateToProps = state => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(Main);
