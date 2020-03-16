import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { View, SafeAreaView } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Lottie from 'lottie-react-native';

import { updateProfileRequest } from '../../store/modules/user/actions';

import {
  Header,
  HeaderTexts,
  HeaderTextName,
  Container,
  HeadProfile,
  Avatar,
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

import BolaLoad from '../../../bola-load.json';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

function Profile({ profile, navigation }) {
  const loading = useSelector(state => state.user.loading);
  const [nome, Setnome] = useState(profile.name);

  const [avatar, SetAvatar] = useState(profile.m_avatar);
  const [avatarsource, SetAvatarsource] = useState(profile.m_avatar);
  const [avatarupload, SetAvatarupload] = useState(profile.m_avatar);

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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fc1936' }}>
      <Header>
        <BackButton underlayColor="#E71531" onPress={() => navigation.goBack()}>
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
