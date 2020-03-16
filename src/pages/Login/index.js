import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  Alert,
  Linking,
} from 'react-native';
import Lottie from 'lottie-react-native';
import Modal from 'react-native-modal';

import { signInRequest } from '../../store/modules/auth/actions';
import api from '../../services/api';

import {
  Container,
  Form,
  Logo,
  MailContent,
  LoginMail,
  TitleMail,
  MailInput,
  MailInputPass,
  LoginPass,
  LoginButton,
  PassInput,
  TitlePass,
  PassContent,
  TitleOne,
  TitleDesc,
  ForgotPassword,
  ForgotPasswordText,
  ForgotPasswordTextOne,
  LoginButtonText,
  LoginBtnModal,
  LoginBtnModalText,
  RegisterBtnModal,
  RegisterBtnModalText,
  GoatButton,
  Loadcontent,
  LoadcontentText,
  ModalContaTitulo,
  ModalContaTexto,
  ModalContaBtn,
  ModalContaBtnText,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import LogoImg from '../../../assets/img/logo.png';
import BgLogin from '../../../assets/img/bglogin.jpg';
import BolaLoad from '../../../bola-load.json';
import Happy from '../../../happy.json';
import Senha from '../../../senha.json';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const [isModalVisiblePayment, setisModalVisiblePayment] = useState(false);
  const [isModalLoginRequest, setisModalLoginRequest] = useState(false);
  const [isModalVisibleRegister, setisModalVisibleRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernamelost, setUsernamelost] = useState('');

  const [registerEmail, setregisterEmail] = useState('');
  const [registerPassword, setregisterPassword] = useState('');

  const [modalcadastro, setModalcadastro] = useState(false);
  const [loadingcadastro, setLoadingcadastro] = useState(false);

  const [modalpass, setModalpass] = useState(false);
  const [loadingpass, setLoadingpass] = useState(false);

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(username, password));
  }

  toggleModalPayment = () => {
    setisModalVisiblePayment(false);
  };

  toggleModalOpenPayment = () => {
    setisModalVisiblePayment(true);
  };

  toggleModalLoginRequest = () => {
    setisModalLoginRequest(false);
  };

  toggleModalRegister = () => {
    setisModalVisibleRegister(false);
  };

  toggleModalOpenRegister = () => {
    setisModalVisibleRegister(true);
  };

  toggleModalCadastro = () => {
    setModalcadastro(false);
  };

  toggleModalOpenCadastro = () => {
    setModalcadastro(true);
  };

  toggleModalPass = () => {
    setModalpass(false);
  };

  async function toggleModalOpenPass() {
    await setModalpass(true);
  }

  async function registerUser() {
    setisModalVisibleRegister(false);
    setLoadingcadastro(true);
    try {
      await api.post('wp/v2/users/register', {
        username: registerEmail,
        email: registerEmail,
        password: registerPassword,
      });
      setregisterEmail('');
      setregisterPassword('');
      setLoadingcadastro(false);
      toggleModalOpenCadastro();
    } catch (err) {
      setLoadingcadastro(false);
      Alert.alert(
        'Erro ao criar conta',
        'Houve um erro na hora de criar a conta, verifique seus dados'
      );
    }
  }

  async function handleSubmitLostpass() {
    setLoadingpass(true);
    try {
      await api.post('wp/v2/users/lost-password', {
        user_login: usernamelost,
      });
      toggleModalPass();
      setLoadingpass(false);
      Alert.alert(
        'Link enviado',
        'Um link para redefinição de senha foi enviado para seu e-mail.'
      );
    } catch (err) {
      setLoadingpass(false);
      Alert.alert(
        'E-mail não encontrado',
        'Por favor digite seu e-mail de cadastro.'
      );
    }
  }

  return (
    <>
      <ImageBackground
        source={BgLogin}
        style={{
          flex: 1,
          width: null,
          height: null,
          backgroundColor: '#f9f9f9',
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Logo source={LogoImg} resizeMode="contain" />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: 0,
            }}
          >
            {loadingcadastro ? (
              <Loadcontent>
                <Lottie
                  resizeMode="contain"
                  autoSize
                  source={BolaLoad}
                  autoPlay
                  loop={true}
                  style={{
                    width: 80,
                    height: 80,
                  }}
                />
                <LoadcontentText>Criando conta...</LoadcontentText>
                <View style={{ marginBottom: 50 }} />
              </Loadcontent>
            ) : (
              <>
                <RegisterBtnModal onPress={toggleModalOpenRegister}>
                  <RegisterBtnModalText>Criar conta</RegisterBtnModalText>
                </RegisterBtnModal>
                <LoginBtnModal onPress={toggleModalOpenPayment}>
                  <LoginBtnModalText>Entrar</LoginBtnModalText>
                </LoginBtnModal>
                <ForgotPassword
                  onPress={() => toggleModalOpenPass()}
                  underlayColor="#f9f9f9"
                >
                  <ForgotPasswordTextOne>
                    Perdeu a senha? Solicite outra
                  </ForgotPasswordTextOne>
                </ForgotPassword>
              </>
            )}
          </View>
        </View>
      </ImageBackground>
      <Modal
        isVisible={isModalVisiblePayment}
        onBackdropPress={() => toggleModalPayment()}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
      >
        <Container>
          {loading ? (
            <View>
              <Lottie
                resizeMode="contain"
                autoSize
                source={BolaLoad}
                autoPlay
                loop={true}
                style={{ width: 100, height: 100 }}
              />
              <Text style={{ marginBottom: 30 }}>Acessando...</Text>
            </View>
          ) : (
            <Form>
              <TitleOne>Acessar</TitleOne>
              <TitleDesc>Digite seu e-mail e senha para entrar.</TitleDesc>

              <LoginMail>
                <MailContent>
                  <TitleMail>e-mail</TitleMail>
                  <MailInput
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="next"
                    onSubmitEditing={() => passwordRef.current.focus()}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Digite seu e-mail"
                  />
                </MailContent>
              </LoginMail>
              <LoginPass>
                <PassContent>
                  <TitlePass>Senha</TitlePass>
                  <PassInput
                    secureTextEntry
                    ref={passwordRef}
                    returnKeyType="go"
                    onSubmitEditing={handleSubmit}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Digite sua senha"
                  />
                </PassContent>
              </LoginPass>
              <LoginButton onPress={handleSubmit}>
                {loading ? (
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#fff' }}>Entrando...</Text>
                    <ActivityIndicator color="#fff" size={20} />
                  </View>
                ) : (
                  <LoginButtonText>Entrar</LoginButtonText>
                )}
              </LoginButton>
              <View style={{ marginBottom: 40, marginTop: 20 }} />
            </Form>
          )}
        </Container>
      </Modal>
      <Modal
        isVisible={isModalLoginRequest}
        onBackdropPress={() => toggleModalLoginRequest()}
      >
        <Lottie
          resizeMode="contain"
          autoSize
          source={BolaLoad}
          autoPlay
          loop={true}
        />
      </Modal>
      <Modal
        isVisible={isModalVisibleRegister}
        onBackdropPress={() => toggleModalRegister()}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
      >
        <Container>
          {loading ? (
            <View>
              <Lottie
                resizeMode="contain"
                autoSize
                source={BolaLoad}
                autoPlay
                loop={true}
                style={{ width: 100, height: 100 }}
              />
              <Text style={{ marginBottom: 30 }}>Acessando...</Text>
            </View>
          ) : (
            <Form>
              <TitleOne>Criar conta</TitleOne>
              <TitleDesc>Crie sua conta em nosso app</TitleDesc>
              <LoginMail>
                <MailContent>
                  <TitleMail>e-mail</TitleMail>
                  <MailInput
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="next"
                    value={registerEmail}
                    onChangeText={setregisterEmail}
                    placeholder="Digite seu melhor e-mail"
                  />
                </MailContent>
              </LoginMail>
              <LoginPass>
                <PassContent>
                  <TitlePass>Senha</TitlePass>
                  <PassInput
                    secureTextEntry
                    returnKeyType="go"
                    onSubmitEditing={registerUser}
                    value={registerPassword}
                    onChangeText={setregisterPassword}
                    placeholder="Crie uma senha"
                  />
                </PassContent>
              </LoginPass>
              <LoginButton onPress={registerUser}>
                {loading ? (
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#fff' }}>Entrando...</Text>
                    <ActivityIndicator color="#fff" size={20} />
                  </View>
                ) : (
                  <LoginButtonText>Cadastrar</LoginButtonText>
                )}
              </LoginButton>

              <ForgotPassword
                onPress={() => navigation.navigate('LostPassword')}
                underlayColor="#f9f9f9"
              >
                <GoatButton
                  onPress={() =>
                    Linking.openURL(
                      'https://futsalfemininotaboao.com.br/privacidade'
                    )
                  }
                >
                  <ForgotPasswordText>
                    Ao cadastrar você concorda com os nossos termos de uso e
                    política de privacidade. Acesse aqui.
                  </ForgotPasswordText>
                </GoatButton>
              </ForgotPassword>
            </Form>
          )}
        </Container>
      </Modal>
      <Modal
        isVisible={modalcadastro}
        onBackdropPress={() => toggleModalCadastro()}
      >
        <View
          style={{
            backgroundColor: '#ffffff',
            alignItems: 'center',
            borderRadius: 8,
            marginLeft: 20,
            marginRight: 20,
            padding: 20,
          }}
        >
          <Lottie
            resizeMode="contain"
            autoSize
            source={Happy}
            autoPlay
            loop={true}
            style={{ width: 100, height: 100 }}
          />
          <ModalContaTitulo>Eba! Conta criada.</ModalContaTitulo>
          <ModalContaTexto>
            Agora você pode aproveitar ao máximo nosso aplicativo. Entre agora
            mesmo!
          </ModalContaTexto>
          <ModalContaBtn onPress={() => toggleModalCadastro()}>
            <ModalContaBtnText>Ok</ModalContaBtnText>
          </ModalContaBtn>
        </View>
      </Modal>
      <Modal isVisible={modalpass} onBackdropPress={() => toggleModalPass()}>
        <View
          style={{
            backgroundColor: '#ffffff',
            alignItems: 'center',
            borderRadius: 8,
            marginLeft: 20,
            marginRight: 20,
            padding: 20,
          }}
        >
          <Lottie
            resizeMode="contain"
            autoSize
            source={Senha}
            autoPlay
            loop={true}
            style={{ width: 100, height: 100 }}
          />
          <ModalContaTitulo>Perdeu a senha?</ModalContaTitulo>
          <ModalContaTexto>
            Digite seu e-mail abaixo e solicite outra.
          </ModalContaTexto>
          <View style={{ marginTop: 20 }} />
          <MailContent>
            <TitleMail>e-mail</TitleMail>
            <MailInputPass
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="send"
              value={usernamelost}
              onChangeText={setUsernamelost}
              placeholder="Digite seu e-mail"
            />
          </MailContent>
          <View style={{ marginTop: 20 }} />
          {loadingpass ? (
            <ActivityIndicator
              style={{ marginTop: 20 }}
              color="#d71435"
              size={40}
            />
          ) : (
            <ModalContaBtn onPress={() => handleSubmitLostpass()}>
              <ModalContaBtnText>Enviar</ModalContaBtnText>
            </ModalContaBtn>
          )}
        </View>
      </Modal>
    </>
  );
}
