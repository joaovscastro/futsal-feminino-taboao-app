import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { View, SafeAreaView, Text, Alert } from 'react-native';
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
  NewComentBtnSubmitDisabled,
  ChangePhoto,
  Loadcontent,
  LoadcontentText,
} from './styles';

import { updateProfileRequest } from '../../store/modules/user/actions';

function CompleteProfile({ profile, navigation }) {
  const loading = useSelector(state => state.user.loading);
  const profilenav = useSelector(state => state.user.profilenav);

  if (profilenav) {
    navigation.navigate('Main');
  }

  const [nome, Setnome] = useState('');
  const [avatar, SetAvatar] = useState(profile.m_avatar);
  const [avatarsource, SetAvatarsource] = useState(profile.m_avatar);
  const [avatarupload, SetAvatarupload] = useState(profile.m_avatar);

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
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      const source = { uri: `data:${image.mime};base64,` + image.data };

      SetAvatar(image.path);
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
    <>
      <SafeAreaView style={{ backgroundColor: '#fc1936' }}>
        <Header>
          <HeaderTexts>
            <HeaderTextName>Complete seu perfil</HeaderTextName>
          </HeaderTexts>
        </Header>
      </SafeAreaView>
      <View style={{ backgroundColor: '#fc1936' }}>
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
              <LoadcontentText>Criando perfil...</LoadcontentText>
            </Loadcontent>
          ) : (
            <>
              <HeadProfile>
                <ChangePhoto onPress={() => selecionaAvatar()}>
                  <Avatar source={{ uri: avatar }} />
                  <ChangePhotoBtn>
                    <ChangePhotoText>Atualizar foto</ChangePhotoText>
                    <Icon name="camera" color="#ec2840" size={15} />
                  </ChangePhotoBtn>
                </ChangePhoto>
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
                    <NewComentBtnSubmitText>Continuar</NewComentBtnSubmitText>
                  </NewComentBtnSubmitDisabled>
                ) : (
                  <NewComentBtnSubmit onPress={() => handleSubmit()}>
                    <NewComentBtnSubmitText>Continuar</NewComentBtnSubmitText>
                  </NewComentBtnSubmit>
                )}
              </View>
            </>
          )}
        </Container>
      </View>
    </>
  );
}

const mapStateToProps = state => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(CompleteProfile);
