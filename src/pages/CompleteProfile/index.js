import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  Button,
  Alert,
  TextInput,
} from 'react-native';
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
  NewComentBtnSubmit,
  NewComentBtnSubmitText,
  NameInput,
  ChangePhotoBtn,
  ChangePhotoText,
  BackButton,
  BackButtonContent,
} from './styles';

import { updateProfileRequest } from '../../store/modules/user/actions';

function CompleteProfile({ profile, navigation }) {
  const [nome, Setnome] = useState(profile.name);

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

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        id: profile.id,
        nome,
        avatarupload,
      })
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fc1936' }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Atualizar perfil</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        <HeadProfile>
          <Avatar source={{ uri: avatarsource }} />
          <ChangePhotoBtn onPress={() => selecionaAvatar()}>
            <ChangePhotoText>Atualizar foto</ChangePhotoText>
            <Icon name="camera" color="#ec2840" size={15} />
          </ChangePhotoBtn>
          <NameInput
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={Setnome}
            placeholder="Digite seu nome"
          />
        </HeadProfile>

        <View>
          <NewComentBtnSubmit onPress={() => handleSubmit()}>
            <NewComentBtnSubmitText>Atualizar perfil</NewComentBtnSubmitText>
          </NewComentBtnSubmit>
        </View>
      </Container>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(CompleteProfile);
