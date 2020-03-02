import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, SafeAreaView, Image, Text, Button, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import {
  Header,
  HeaderTexts,
  HeaderTextName,
  HeaderTextDesc,
  SearchContent,
  SearchBtn,
  Container,
  Noticias,
  NoticiasImg,
  NoticiasTitle,
  NoticiasDesc,
  HeadProfile,
  Avatar,
  Name,
  Medalhas,
  MedalhaTitle,
  Pontos,
  PontosTitle,
  PontosNumero,
} from './styles';

import fotoAvatar from '../../../assets/img/avatar.png';
import noticiaPlaceholder from '../../../assets/img/noticias-placeholder.jpg';
import Brasao from '../../../assets/img/brasao.png';
import MedalhaUm from '../../../assets/img/medalha1.png';
import MedalhaDois from '../../../assets/img/medalha2.png';
import MedalhaTres from '../../../assets/img/medalha3.png';
import MedalhaQuatro from '../../../assets/img/medalha4.png';
import MedalhaCinco from '../../../assets/img/medalha5.png';

function Profile({ profile }) {
  const [avatarsource, SetAvatarsource] = useState(profile.m_avatar);
  const [avatarupload, SetAvatarupload] = useState(profile.m_avatar);

  const [tipo, SetTipo] = useState('url');

  const options = {
    title: 'Selecionar avatar',
    cancelButtonTitle: 'Cancelar',
    takePhotoButtonTitle: 'Tirar foto',
    chooseFromLibraryButtonTitle: 'Escolher da biblioteca',
    tintColor: '#0a84ff',
    maxWidth: 100,
    maxHeight: 100,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  function selecionaAvatar() {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
        Alert.alert('Não foi possível acessar! Verifique sua permissão.');
      } else {
        const sourceView = response.uri;
        SetAvatarsource(sourceView);

        // You can also display the image using data:
        const source = { uri: 'data:image/jpeg;base64,' + response.data };

        SetAvatarupload(source.uri);
        SetTipo('base64');
      }
    });
  }

  async function atualizeAvatar() {
    try {
      await api.post('wp/v2/m_users/avatar', {
        base64: avatarupload,
      });
    } catch (err) {
      Alert.alert(
        'Falha na autenticação',
        'Houve um erro no login, verifique seus dados'
      );
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Perfil</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        <HeadProfile>
          <Avatar source={{ uri: avatarsource }} />
          <Name>{profile.name}</Name>
          <Button title="Alterar foto" onPress={() => selecionaAvatar()} />
          <Button title="Atualizar" onPress={() => atualizeAvatar()} />
          <Pontos>
            <PontosTitle>Pontos</PontosTitle>
            <PontosNumero>1000</PontosNumero>
          </Pontos>
        </HeadProfile>
        <Medalhas>
          <MedalhaTitle>Suas medalhas</MedalhaTitle>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={MedalhaUm}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
            <Image
              source={MedalhaDois}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
            <Image
              source={MedalhaTres}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
            <Image
              source={MedalhaQuatro}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={MedalhaCinco}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
            <Image
              source={MedalhaDois}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
            <Image
              source={MedalhaTres}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
            <Image
              source={MedalhaUm}
              resizeMode="contain"
              style={{ width: 70, height: 70, flex: 1 }}
            />
          </View>
        </Medalhas>
      </Container>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(Profile);
