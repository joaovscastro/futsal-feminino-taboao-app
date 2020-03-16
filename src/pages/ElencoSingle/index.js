import React from 'react';
import { SafeAreaView, View, Image, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

import {
  Header,
  HeaderTexts,
  HeaderTextName,
  Container,
  BackButton,
  BackButtonContent,
  Title,
  TitlePerformance,
  Data,
  DataText,
  DataTextInfo,
  ElencoMain,
  ElencoText,
  ElencoTextTitle,
  ElencoTextCont,
  ElencoDesc,
  Disclaimer,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

export default function ElencoSingle({ navigation }) {
  const jogadoraInfo = navigation.getParam('elencosingle');
  console.log(jogadoraInfo.golsJogadora);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fc1936' }}>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonContent>
            <Icon name="chevron-left" size={30} color="#fc1936" />
          </BackButtonContent>
        </BackButton>
        <HeaderTexts>
          <HeaderTextName>{jogadoraInfo.nomeJogadora}</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        <ElencoMain>
          <Image
            source={{ uri: jogadoraInfo.fotoJogadora }}
            style={{ width: 181, height: 181, borderRadius: 8 }}
          />
          <ElencoText>
            <ElencoTextTitle>Nacionalidade</ElencoTextTitle>
            <ElencoTextCont>
              {jogadoraInfo.nacionalidadeJogadora}
            </ElencoTextCont>
            <ElencoTextTitle>Número</ElencoTextTitle>
            <ElencoTextCont>{jogadoraInfo.numeroJogadora}</ElencoTextCont>
            <ElencoTextTitle>Time</ElencoTextTitle>
            <ElencoTextCont>Taboão da Serra</ElencoTextCont>
          </ElencoText>
        </ElencoMain>
        <TitlePerformance>Performance</TitlePerformance>

        <View>
          <View style={{ backgroundColor: '#000000' }}>
            <Data>Temporada 2020</Data>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: '#eeeeee' }}>
            <DataText style={{ flex: 1 }}>Gols</DataText>
            <DataText style={{ flex: 1 }}>Assistências</DataText>
            <DataText style={{ flex: 1 }}>Amarelos</DataText>
            <DataText style={{ flex: 1 }}>Vermelhos</DataText>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: '#ffffff' }}>
            <DataTextInfo style={{ flex: 1 }}>
              {jogadoraInfo.golsJogadora[37][22].goals}
            </DataTextInfo>
            <DataTextInfo style={{ flex: 1 }}>
              {jogadoraInfo.golsJogadora[37][22].assists}
            </DataTextInfo>
            <DataTextInfo style={{ flex: 1 }}>
              {jogadoraInfo.golsJogadora[37][22].yellowcards}
            </DataTextInfo>
            <DataTextInfo style={{ flex: 1 }}>
              {jogadoraInfo.golsJogadora[37][22].redcards}
            </DataTextInfo>
          </View>
        </View>
        <Disclaimer>Podem ocorrer divergências nos dados mostrados.</Disclaimer>
        <ElencoDesc>
          <Title>Sobre</Title>
          <HTML
            tagsStyles={{
              p: {
                fontFamily: 'SF Pro Text',
                fontWeight: 'normal',
                fontSize: 14,
                color: '#171717',
                lineHeight: 22,
                opacity: 0.8,
              },
            }}
            imagesMaxWidth={Dimensions.get('window').width}
            html={jogadoraInfo.descJogadora}
          />
        </ElencoDesc>
      </Container>
    </SafeAreaView>
  );
}
