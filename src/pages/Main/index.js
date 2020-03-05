import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';

import Svg, { Path } from 'react-native-svg';

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
  Elenco,
  ElencoImg,
  ElencoName,
  VerElenco,
  ElencoLine,
  AboutButton,
  About,
  AboutSubtitle,
  AboutTitle,
  LogoTaboao,
  NewsDate,
  ElencoBtn,
  ElencoNumber,
  MaisNoticias,
  MaisElenco,
} from './styles';

import Logo from '../../../assets/img/logo.png';
import Bg from '../../../bg.jpg';
import ElencoBg from '../../../assets/img/elenco.png';
import ElencoTeste from '../../../assets/img/testeelenco.png';
import Projeto from '../../../assets/img/projeto.jpg';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

export default function Main({ navigation }) {
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
                  <HeaderNameText> João Castro</HeaderNameText>
                </View>
                <AvatarLink onPress={() => navigation.navigate('Home')}>
                  <Avatar
                    source={{
                      uri:
                        'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/85041147_199170564795349_8109417134141997056_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=Z0qYYl-0h3QAX_5fZ4-&oh=1bfd628ca54d7746fbc0befe1bdfa24e&oe=5E8E916B',
                    }}
                  />
                </AvatarLink>
              </HeaderProfile>
              <Card>
                <View style={{ flex: 1 }}>
                  <CardTitle>Próximo jogo</CardTitle>
                  <CardJogo>Taboão da Serra vs Leoas da serra</CardJogo>
                  <CardMore>
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
            </SafeAreaView>
          </Header>

          <View>
            <TitleNews>Últimas notícias</TitleNews>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <News>
                <NewsImg
                  source={{
                    uri:
                      'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/85041147_199170564795349_8109417134141997056_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=Z0qYYl-0h3QAX_5fZ4-&oh=1bfd628ca54d7746fbc0befe1bdfa24e&oe=5E8E916B',
                  }}
                />
                <NewsTitle>
                  Taboão da Serra sub-17 vence o Colombo de virad...
                </NewsTitle>
                <NewsDate>4 de março de 2020</NewsDate>
              </News>
              <News>
                <NewsImg
                  source={{
                    uri:
                      'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/85041147_199170564795349_8109417134141997056_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=Z0qYYl-0h3QAX_5fZ4-&oh=1bfd628ca54d7746fbc0befe1bdfa24e&oe=5E8E916B',
                  }}
                />
                <NewsTitle>
                  Taboão da Serra sub-17 vence o Colombo de virad...
                </NewsTitle>
                <NewsDate>4 de março de 2020</NewsDate>
              </News>
              <News>
                <NewsImg
                  source={{
                    uri:
                      'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/85041147_199170564795349_8109417134141997056_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=Z0qYYl-0h3QAX_5fZ4-&oh=1bfd628ca54d7746fbc0befe1bdfa24e&oe=5E8E916B',
                  }}
                />
                <NewsTitle>
                  Taboão da Serra sub-17 vence o Colombo de virad...
                </NewsTitle>
                <NewsDate>4 de março de 2020</NewsDate>
              </News>
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 30,
              marginTop: 50,
              marginLeft: 20,
              alignItems: 'center',
            }}
          >
            <MaisNoticias>Ver todas as notícias</MaisNoticias>
            <Svg width="18" height="10" viewBox="0 0 18 10">
              <Path
                fill="#000"
                d="M12.935 0l-.851.84 3.611 3.566H0v1.188h15.695L12.084 9.16l.851.841L18 5 12.935.003V0z"
              ></Path>
            </Svg>
          </View>
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
              <ElencoBtn>
                <ImageBackground
                  source={ElencoTeste}
                  style={{
                    width: 197,
                    height: 170,
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
                    <ElencoNumber>12.</ElencoNumber>

                    <View>
                      <ElencoName>Luana</ElencoName>
                      <ElencoName>Matadora</ElencoName>
                    </View>
                  </View>
                </ImageBackground>
              </ElencoBtn>
              <ElencoBtn>
                <ImageBackground
                  source={ElencoTeste}
                  style={{
                    width: 197,
                    height: 170,
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
                    <ElencoNumber>12.</ElencoNumber>

                    <View>
                      <ElencoName>Luana</ElencoName>
                      <ElencoName>Matadora</ElencoName>
                    </View>
                  </View>
                </ImageBackground>
              </ElencoBtn>
              <ElencoBtn>
                <ImageBackground
                  source={ElencoTeste}
                  style={{
                    width: 197,
                    height: 170,
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
                    <ElencoNumber>12.</ElencoNumber>

                    <View>
                      <ElencoName>Luana</ElencoName>
                      <ElencoName>Matadora</ElencoName>
                    </View>
                  </View>
                </ImageBackground>
              </ElencoBtn>
            </ScrollView>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 30,
                marginTop: 50,
                marginLeft: 20,
                alignItems: 'center',
              }}
            >
              <MaisElenco>Ver elenco completo</MaisElenco>
              <Svg width="18" height="10" viewBox="0 0 18 10">
                <Path
                  fill="#fff"
                  d="M12.935 0l-.851.84 3.611 3.566H0v1.188h15.695L12.084 9.16l.851.841L18 5 12.935.003V0z"
                ></Path>
              </Svg>
            </View>
          </View>
        </View>

        <View>
          <AboutButton>
            <About source={Projeto}>
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
