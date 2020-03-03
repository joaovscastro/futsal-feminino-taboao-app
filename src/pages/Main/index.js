import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';

import {
  Header,
  HeaderProfile,
  HeaderName,
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
  About,
  AboutSubtitle,
  AboutTitle,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

export default function Main({ navigation }) {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Header>
          <SafeAreaView>
            <HeaderProfile>
              <HeaderName>Olá João Castro</HeaderName>
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
                  <Icon name="chevron-right" size={20} />
                </CardMore>
              </View>
              <CardButtonMore>
                <Icon name="soccer" size={25} color="#979797" />
              </CardButtonMore>
            </Card>
          </SafeAreaView>
        </Header>

        <View>
          <TitleNews>Últimas notícias</TitleNews>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
            </News>
          </ScrollView>
        </View>
        <TitleElenco>Elenco</TitleElenco>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <VerElenco>
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                marginBottom: 8,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fc1936',
              }}
            >
              <Icon name="arrow-top-right" size={25} color="#fff" />
            </View>
            <ElencoName>Ver elenco</ElencoName>
          </VerElenco>
          <ElencoLine />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Elenco>
              <ElencoImg
                source={{
                  uri:
                    'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/85041147_199170564795349_8109417134141997056_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=Z0qYYl-0h3QAX_5fZ4-&oh=1bfd628ca54d7746fbc0befe1bdfa24e&oe=5E8E916B',
                }}
              />
              <ElencoName>João</ElencoName>
            </Elenco>
            <Elenco>
              <ElencoImg
                source={{
                  uri:
                    'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/85041147_199170564795349_8109417134141997056_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=Z0qYYl-0h3QAX_5fZ4-&oh=1bfd628ca54d7746fbc0befe1bdfa24e&oe=5E8E916B',
                }}
              />
              <ElencoName>João</ElencoName>
            </Elenco>
            <Elenco>
              <ElencoImg
                source={{
                  uri:
                    'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/85041147_199170564795349_8109417134141997056_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=Z0qYYl-0h3QAX_5fZ4-&oh=1bfd628ca54d7746fbc0befe1bdfa24e&oe=5E8E916B',
                }}
              />
              <ElencoName>João</ElencoName>
            </Elenco>
            <Elenco>
              <ElencoImg
                source={{
                  uri:
                    'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/85041147_199170564795349_8109417134141997056_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=Z0qYYl-0h3QAX_5fZ4-&oh=1bfd628ca54d7746fbc0befe1bdfa24e&oe=5E8E916B',
                }}
              />
              <ElencoName>João</ElencoName>
            </Elenco>
            <Elenco>
              <ElencoImg
                source={{
                  uri:
                    'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/85041147_199170564795349_8109417134141997056_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=Z0qYYl-0h3QAX_5fZ4-&oh=1bfd628ca54d7746fbc0befe1bdfa24e&oe=5E8E916B',
                }}
              />
              <ElencoName>João</ElencoName>
            </Elenco>
            <Elenco>
              <ElencoImg
                source={{
                  uri:
                    'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/85041147_199170564795349_8109417134141997056_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=Z0qYYl-0h3QAX_5fZ4-&oh=1bfd628ca54d7746fbc0befe1bdfa24e&oe=5E8E916B',
                }}
              />
              <ElencoName>João</ElencoName>
            </Elenco>
            <Elenco>
              <ElencoImg
                source={{
                  uri:
                    'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/85041147_199170564795349_8109417134141997056_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=Z0qYYl-0h3QAX_5fZ4-&oh=1bfd628ca54d7746fbc0befe1bdfa24e&oe=5E8E916B',
                }}
              />
              <ElencoName>João</ElencoName>
            </Elenco>
          </ScrollView>
        </View>
        <View>
          <About
            source={{
              uri:
                'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/85041147_199170564795349_8109417134141997056_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=Z0qYYl-0h3QAX_5fZ4-&oh=1bfd628ca54d7746fbc0befe1bdfa24e&oe=5E8E916B',
            }}
          >
            <AboutSubtitle>Conheça mais</AboutSubtitle>
            <AboutTitle>Nosso projeto</AboutTitle>
          </About>
        </View>
      </ScrollView>
    </>
  );
}
