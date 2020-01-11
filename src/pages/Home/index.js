import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';

import { Header, HeaderTexts, HeaderTextName, HeaderTextDesc, AvatarContent, Avatar,
  Container, Title, Destaque, DestaqueBg, DestaqueTitle, MelhoresMomentos,
  MelhoresMomentosItem, MelhoresMomentosImg, MelhoresMomentosTitle,
  UltimoJogo, JogoTitulo, JogoContent, JogoTimes, JogoInfo, TimeName,
  JogoDetalhes, JogoDetalhesTitle, Elenco, ElencoFoto, ElencoName,
  ElencoContent, Noticias, NoticiasImg, NoticiasTitle, NoticiasDesc,
  JogoDetalhesView, JogoInfoTime, JogoInfoData, JogoLogo } from './styles';

import fotoAvatar  from "../../../assets/img/avatar.png";
import noticiaPlaceholder from "../../../assets/img/noticias-placeholder.jpg";
import Brasao from "../../../assets/img/brasao.png";

import Icon from "react-native-vector-icons/MaterialIcons";
Icon.loadFont()

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Olá Maria</HeaderTextName>
          <HeaderTextDesc>O que você quer fazer hoje?</HeaderTextDesc>
        </HeaderTexts>
        <AvatarContent>
          <Avatar source={fotoAvatar} />
        </AvatarContent>
      </Header>
      <Container>
        <Title>Destaque</Title>
        <Destaque>
          <DestaqueBg source={fotoAvatar}>
          <DestaqueTitle>Destaque</DestaqueTitle>
          </DestaqueBg>
        </Destaque>
        <Title>Melhores momentos</Title>
        <MelhoresMomentos horizontal={true} showsHorizontalScrollIndicator={false}>
          <MelhoresMomentosItem underlayColor="#ffffff">
            <View>
              <MelhoresMomentosImg source={fotoAvatar} />
              <MelhoresMomentosTitle>Lorem</MelhoresMomentosTitle>
            </View>
          </MelhoresMomentosItem>
          <MelhoresMomentosItem underlayColor="#ffffff">
            <View>
              <MelhoresMomentosImg source={fotoAvatar} />
              <MelhoresMomentosTitle>Lorem</MelhoresMomentosTitle>
            </View>
          </MelhoresMomentosItem>
        </MelhoresMomentos>

        <UltimoJogo style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.20,
          shadowRadius: 1.41,
          elevation: 2,
        }}>
          <JogoTitulo>Campeonato Paulista</JogoTitulo>
          <JogoContent>
            <JogoTimes>
              <JogoLogo source={Brasao} resizeMode="contain" />
              <TimeName>Taboao</TimeName>
            </JogoTimes>
            <JogoInfo>
              <JogoInfoTime>19:30</JogoInfoTime>
              <JogoInfoData>01/10/2020</JogoInfoData>
            </JogoInfo>
            <JogoTimes>
            <JogoLogo source={Brasao} resizeMode="contain" />
              <TimeName>Leoas da serra </TimeName>
            </JogoTimes>
          </JogoContent>
          <JogoDetalhesView>
          <JogoDetalhes underlayColor="#f3f3f3">
              <JogoDetalhesTitle>Ver detalhes</JogoDetalhesTitle>
            </JogoDetalhes>
          </JogoDetalhesView>
        </UltimoJogo>
        <Title>Elenco</Title>
        <Elenco horizontal={true} showsHorizontalScrollIndicator={false}>
          <ElencoContent>
            <ElencoFoto source={fotoAvatar} />
            <ElencoName>Marielle</ElencoName>
          </ElencoContent>
          <ElencoContent>
            <ElencoFoto source={fotoAvatar} />
            <ElencoName>Marielle</ElencoName>
          </ElencoContent>
          <ElencoContent>
            <ElencoFoto source={fotoAvatar} />
            <ElencoName>Marielle</ElencoName>
          </ElencoContent>
          <ElencoContent>
            <ElencoFoto source={fotoAvatar} />
            <ElencoName>Marielle</ElencoName>
          </ElencoContent>
          <ElencoContent>
            <ElencoFoto source={fotoAvatar} />
            <ElencoName>Marielle</ElencoName>
          </ElencoContent>
          </Elenco>
          <Title>Notícias</Title>
          <Noticias underlayColor="#ffffff">
            <NoticiasImg source={noticiaPlaceholder} />
            <View style={{ flex: 1 }}>
              <NoticiasTitle>Lorem ipsum in dolor</NoticiasTitle>
              <NoticiasDesc>Lorem ipsum in dolor</NoticiasDesc>
            </View>
            <View>
              <Icon name="chevron-right" size={30} color="#C4C4C4" />
            </View>
          </Noticias>
          <Noticias underlayColor="#ffffff">
            <NoticiasImg source={noticiaPlaceholder} />
            <View style={{ flex: 1 }}>
              <NoticiasTitle>Lorem ipsum in dolor</NoticiasTitle>
              <NoticiasDesc>Lorem ipsum in dolor</NoticiasDesc>
            </View>
            <View>
              <Icon name="chevron-right" size={30} color="#C4C4C4" />
            </View>
          </Noticias>
      </Container>
    </SafeAreaView>
  );
}
