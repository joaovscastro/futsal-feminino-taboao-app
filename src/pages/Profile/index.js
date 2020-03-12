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

// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

import Lottie from 'lottie-react-native';
import BolaLoad from '../../../bola-load.json';

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
  Loadcontent,
  LoadcontentText,
  NewComentBtnSubmitDisabled,
} from './styles';

import { updateProfileRequest } from '../../store/modules/user/actions';

function Profile({ profile, navigation }) {
  const loading = useSelector(state => state.user.loading);
  const [nome, Setnome] = useState(profile.name);

  const [avatar, SetAvatar] = useState(profile.m_avatar);
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

  function selecionaAvatarOri() {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
        Alert.alert('Não foi possível acessar! Verifique sua permissão.');
      } else {
        const sourceView = response.uri;
        SetAvatar(sourceView);

        // You can also display the image using data:
        const source = { uri: 'data:image/jpeg;base64,' + response.data };

        SetAvatarupload(source.uri);
        SetTipo('base64');
      }
    });
  }

  function selecionaAvatar() {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      const source = { uri: `data:${image.mime};base64,` + image.data };

      SetAvatarupload(source.uri);
    });
  }

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        id: profile.id,
        nome,
        avatarupload,
        avatarsource,
      })
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fc1936' }}>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonContent>
            <Icon name="chevron-left" size={30} color="#fc1936" />
          </BackButtonContent>
        </BackButton>
        <HeaderTexts>
          <HeaderTextName>Perfil</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        {loading ? (
          <Loadcontent>
            <Lottie
              resizeMode="contain"
              autoSize
              source={BolaLoad}
              autoPlay
              loop={true}
              style={{
                width: 60,
                height: 60,
              }}
            />
            <LoadcontentText>Atualizando perfil...</LoadcontentText>
          </Loadcontent>
        ) : (
          <>
            <HeadProfile>
              <Avatar source={{ uri: avatar }} />
              <ChangePhotoBtn onPress={() => selecionaAvatar()}>
                <ChangePhotoText>Atualizar foto</ChangePhotoText>
                <Icon name="camera" color="#ec2840" size={15} />
              </ChangePhotoBtn>
              <NameInput
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                value={nome}
                onChangeText={Setnome}
                placeholder="Digite seu nome"
              />
            </HeadProfile>
            <View>
              {nome === '' ? (
                <NewComentBtnSubmitDisabled>
                  <NewComentBtnSubmitText>
                    Atualizar perfil
                  </NewComentBtnSubmitText>
                </NewComentBtnSubmitDisabled>
              ) : (
                <NewComentBtnSubmit onPress={() => handleSubmit()}>
                  <NewComentBtnSubmitText>
                    {' '}
                    Atualizar perfil
                  </NewComentBtnSubmitText>
                </NewComentBtnSubmit>
              )}
            </View>
          </>
        )}
      </Container>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(Profile);
