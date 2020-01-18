import React from 'react';
import { SafeAreaView, View, ImageBackground, Text, Image } from 'react-native';

import { BackButton, BackButtonContent, Container, Title, Data, Content, Share,
  TitleComent, Comentario, ComentarioCont, DataComent, ComentName,
  ComentCont, ComentAvatar } from './styles';
import fotoAvatar  from "../../../assets/img/avatar.png";

import Img1 from "../../../assets/img/img1.jpg";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
Icon.loadFont()

export default function NewsSingle({ navigation }) {
  return (
    <>
    <ImageBackground
    source={Img1}
        style={{
          width: null,
          height: 220,
          backgroundColor: '#f9f9f9'
        }}>
          <SafeAreaView>
       <BackButton onPress={() => navigation.goBack()}>
         <BackButtonContent>
         <Icon name="chevron-left" size={30} />
         </BackButtonContent>
       </BackButton>
    </SafeAreaView>
    </ImageBackground>
    <Container>
       <Title>Lorem ipseum is dolor Lorem ipseum is dolor Lorem ipseum is dolor</Title>
       <Data>02/01/2020</Data>
       <Content>Incididunt ea ipsum dolor esse aliqua magna voluptate enim ad laboris do. Sunt ullamco sunt id est occaecat officia. Non labore deserunt magna sit esse est. Officia eu do proident incididunt deserunt officia aliquip ad ipsum veniam ipsum sunt. Mollit non mollit eiusmod laboris. Magna et est nulla elit adipisicing sit amet in in anim occaecat nisi. Ex excepteur aliquip enim quis nisi. Aute ipsum commodo adipisicing nisi ex adipisicing ipsum sunt. Minim duis exercitation cillum adipisicing et consectetur veniam magna labore nostrud sit. Nisi esse esse ipsum aliqua minim magna eu nisi dolor cillum velit culpa proident. Aliqua sunt consequat proident ea aliquip commodo qui.</Content>

       <View style={{ flexDirection: "row", justifyContent: "flex-end"}}>
         <Share>Compartilhar</Share>
         <Icon name="share-outline" size={20} color="#000000" />
       </View>
       <View style={{ marginBottom: 50 }}>
       <TitleComent>Comentários</TitleComent>
       <Comentario>
         <ComentarioCont>
         <ComentAvatar source={fotoAvatar}  />
           <ComentName>João Castro</ComentName>
           <DataComent>12/01/2020</DataComent>
         </ComentarioCont>
         <ComentCont>comentcomentcomentcomentcomentcomentcomentcomentcomentcomentcomentcomentcomentcoment</ComentCont>
       </Comentario>
       <Comentario>
         <ComentarioCont>
         <ComentAvatar source={fotoAvatar}  />
           <ComentName>João Castro</ComentName>
           <DataComent>12/01/2020</DataComent>
         </ComentarioCont>
         <ComentCont>comentcomentcomentcomentcomentcomentcomentcomentcomentcomentcomentcomentcomentcoment</ComentCont>
       </Comentario>
       </View>
       </Container>
    </>
  );
}
