import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';

import { Header, HeaderTexts, HeaderTextName, HeaderTextDesc, AvatarContent, Avatar,
  Container, Title, Destaque, DestaqueBg, DestaqueTitle, MelhoresMomentos,
  MelhoresMomentosItem, MelhoresMomentosImg, MelhoresMomentosTitle } from './styles';
import fotoAvatar  from "../../../assets/img/avatar.png"

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
          <MelhoresMomentosItem>
            <View>
              <MelhoresMomentosImg source={fotoAvatar} />
              <MelhoresMomentosTitle>Lorem</MelhoresMomentosTitle>
            </View>
          </MelhoresMomentosItem>
          <MelhoresMomentosItem>
            <View>
              <MelhoresMomentosImg source={fotoAvatar} />
              <MelhoresMomentosTitle>Lorem</MelhoresMomentosTitle>
            </View>
          </MelhoresMomentosItem>
        </MelhoresMomentos>
      </Container>
    </SafeAreaView>
  );
}
