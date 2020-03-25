import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  View,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Lottie from 'lottie-react-native';

import { updateProfileRequest } from '../../store/modules/user/actions';

import onesignalapi from '../../services/onesignal';

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
  Message,
  GolBtn,
  GolBtnText,
  GolBtnDisabled,
  GolBtnTextDisabled,
} from './styles';

import BolaLoad from '../../../assets/animations/bola-load.json';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

function SendNotification({ profile, navigation }) {
  const [loading, Setloading] = useState(false);

  const [Titulo, setTitulo] = useState('');
  const [Mensagem, setMensagem] = useState('');
  const [Som, setSom] = useState('');

  const [Gol, setGol] = useState(false);

  async function SendNotification() {
    try {
      Setloading(true);
      await onesignalapi.post('notifications', {
        app_id: 'a49f11eb-3470-43e0-98ff-149b71ea2ab8',
        included_segments: ['All'],
        headings: { en: Titulo },
        contents: { en: Mensagem },
        ios_sound: `${Som}.wav`,
        android_sound: Som,
      });
      Setloading(false);
      setTitulo('');
      setMensagem('');
      setGol(false);
    } catch (err) {
      Setloading(false);
      Alert.alert(
        'Erro ao enviar',
        'Verifique se preencher corretamente ou tente mais tarde'
      );
    }
  }

  function AtivaGol() {
    setGol(true);
    setSom('gol');
  }

  function DesativaGol() {
    setGol(false);
    setSom('');
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
          <HeaderTextName>Enviar notificação</HeaderTextName>
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
            <LoadcontentText>Enviando...</LoadcontentText>
          </Loadcontent>
        ) : (
          <>
            <HeadProfile>
              <NameInput
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                value={Titulo}
                onChangeText={setTitulo}
                placeholder="Título"
              />

              <Message
                autoCorrect={false}
                placeholder="Mensagem"
                onChangeText={setMensagem}
                value={Mensagem}
                numberOfLines={5}
                multiline={true}
              />
            </HeadProfile>
            <View>
              <View>
                {Gol ? (
                  <TouchableOpacity
                    style={{ marginTop: 20, marginBottom: 5 }}
                    onPress={() => DesativaGol()}
                  >
                    <GolBtn>
                      <Icon name="soccer" size={20} color="#fff" />
                      <GolBtnText>Notificação de Gol</GolBtnText>
                    </GolBtn>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{ marginTop: 20, marginBottom: 5 }}
                    onPress={() => AtivaGol()}
                  >
                    <GolBtnDisabled>
                      <Icon name="soccer" size={20} color="#666" />
                      <GolBtnTextDisabled>
                        Notificação de Gol
                      </GolBtnTextDisabled>
                    </GolBtnDisabled>
                  </TouchableOpacity>
                )}
              </View>
              <NewComentBtnSubmit onPress={() => SendNotification()}>
                <NewComentBtnSubmitText> Enviar</NewComentBtnSubmitText>
              </NewComentBtnSubmit>
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

export default connect(mapStateToProps)(SendNotification);
