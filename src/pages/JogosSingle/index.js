import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';

import { Header, HeaderTexts, HeaderTextName, Container, UltimoJogo,
  JogoContent, JogoTimes, JogoInfo, TimeName,
   JogoInfoTime, JogoLogo, BackButton, BackButtonContent,
   Title, Data, DataText, DataTextInfo, Escalacao, EscalacaoJogadora,
   EscalacaoJogadoraAvatar, EscalacaoJogadoraNome, EscalacaoJogadoraPosicao,
   EscalacaoDados, EscalacaoDadosText, EscalacaoDadosNumber } from './styles';

  import fotoAvatar  from "../../../assets/img/perfil-teste.jpg";
import noticiaPlaceholder from "../../../assets/img/noticias-placeholder.jpg";
import Brasao from "../../../assets/img/brasao.png";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
Icon.loadFont()

export default function JogosSingle({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
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
          <JogoContent>
            <JogoTimes>
              <JogoLogo source={Brasao} resizeMode="contain" />
              <TimeName>Taboao</TimeName>
            </JogoTimes>
            <JogoInfo>
              <JogoInfoTime>0 x 0</JogoInfoTime>
            </JogoInfo>
            <JogoTimes>
            <JogoLogo source={Brasao} resizeMode="contain" />
              <TimeName>Leoas da serra </TimeName>
            </JogoTimes>
          </JogoContent>
        </UltimoJogo>
        <Title>Detalhes</Title>

        <View>
          <View style={{ backgroundColor: "#000000" }}>
          <Data>22 de dezembro de 2019</Data>
          </View>
          <View style={{ flexDirection: "row", backgroundColor: "#eeeeee" }}>
            <DataText style={{ flex:1 }}>Horário</DataText>
            <DataText style={{ flex:1 }}>Campeonato</DataText>
            <DataText style={{ flex:1 }}>Temporada</DataText>
          </View>
          <View style={{ flexDirection: "row", backgroundColor: "#ffffff" }}>
            <DataTextInfo style={{ flex:1 }}>19:30</DataTextInfo>
            <DataTextInfo style={{ flex:1 }}>Paulista</DataTextInfo>
            <DataTextInfo style={{ flex:1 }}>2020</DataTextInfo>
          </View>
          <View style={{ backgroundColor: "#000000" }}>
          <Data>Ginásio Zé do Feijáo</Data>
          </View>
        </View>

        <Title>Escalação</Title>

      <Escalacao>
        <EscalacaoJogadora>
          <EscalacaoJogadoraAvatar source={fotoAvatar} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <EscalacaoJogadoraNome>Marielle</EscalacaoJogadoraNome>
            <EscalacaoJogadoraPosicao>Goleira</EscalacaoJogadoraPosicao>
          </View>
         <Icon name="chevron-right" size={20} />
        </EscalacaoJogadora>

        <EscalacaoDados>
            <View style={{ flexDirection: "row" }}>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center" }}>Gols</EscalacaoDadosText>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center" }}>Assistências</EscalacaoDadosText>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center" }}>Amarelos</EscalacaoDadosText>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center"}}>Vermelhos</EscalacaoDadosText>
            </View>

            <View style={{ flexDirection: "row" }}>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center" }}>0</EscalacaoDadosText>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center" }}>0</EscalacaoDadosText>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center" }}>0</EscalacaoDadosText>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center"}}>0</EscalacaoDadosText>
            </View>
        </EscalacaoDados>

      </Escalacao>

      <Escalacao>
        <EscalacaoJogadora>
          <EscalacaoJogadoraAvatar source={fotoAvatar} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <EscalacaoJogadoraNome>Marielle</EscalacaoJogadoraNome>
            <EscalacaoJogadoraPosicao>Goleira</EscalacaoJogadoraPosicao>
          </View>
         <Icon name="chevron-right" size={20} />
        </EscalacaoJogadora>

        <EscalacaoDados>
            <View style={{ flexDirection: "row" }}>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center" }}>Gols</EscalacaoDadosText>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center" }}>Assistências</EscalacaoDadosText>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center" }}>Amarelos</EscalacaoDadosText>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center"}}>Vermelhos</EscalacaoDadosText>
            </View>

            <View style={{ flexDirection: "row" }}>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center" }}>0</EscalacaoDadosText>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center" }}>0</EscalacaoDadosText>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center" }}>0</EscalacaoDadosText>
              <EscalacaoDadosText style={{ flex: 1, textAlign: "center"}}>0</EscalacaoDadosText>
            </View>
        </EscalacaoDados>

      </Escalacao>

      <Escalacao>
        <EscalacaoJogadora>
          <EscalacaoJogadoraAvatar source={fotoAvatar} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <EscalacaoJogadoraNome>Marielle</EscalacaoJogadoraNome>
            <EscalacaoJogadoraPosicao>Goleira</EscalacaoJogadoraPosicao>
          </View>
         <Icon name="chevron-right" size={20} />
        </EscalacaoJogadora>

        <EscalacaoDados>
            <View style={{ flexDirection: "row" }}>
              <EscalacaoDadosText>Gols</EscalacaoDadosText>
              <EscalacaoDadosText>Assistências</EscalacaoDadosText>
              <EscalacaoDadosText>Amarelos</EscalacaoDadosText>
              <EscalacaoDadosText>Vermelhos</EscalacaoDadosText>
            </View>

            <View style={{ flexDirection: "row" }}>
              <EscalacaoDadosNumber>0</EscalacaoDadosNumber>
              <EscalacaoDadosNumber>0</EscalacaoDadosNumber>
              <EscalacaoDadosNumber>0</EscalacaoDadosNumber>
              <EscalacaoDadosNumber>0</EscalacaoDadosNumber>
            </View>
        </EscalacaoDados>

      </Escalacao>

      </Container>
    </SafeAreaView>
  );
}
