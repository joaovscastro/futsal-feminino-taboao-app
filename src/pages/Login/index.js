import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Image,
  View,
  TextInput,
  Button,
  Text,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native';
import Lottie from 'lottie-react-native';

import Modal from 'react-native-modal';

import { signInRequest } from '../../store/modules/auth/actions';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import api from '../../services/api';

import BolaLoad from '../../../bola-load.json';

import {
  Container,
  Form,
  Header,
  Logo,
  ContainerHome,
  MailContent,
  LoginMail,
  LoginIcon,
  TitleMail,
  MailInput,
  LoginPass,
  LoginButton,
  PassInput,
  TitlePass,
  PassContent,
  TitleOne,
  TitleDesc,
  RequestAcess,
  RequestAcessText,
  ForgotPassword,
  ForgotPasswordText,
  ForgotPasswordCont,
  LoginBtn,
  LoginButtonText,
  LoginBtnModal,
  LoginBtnModalText,
  RegisterBtnModal,
  RegisterBtnModalText,
} from './styles';

import LogoImg from '../../../assets/img/logo.png';
import BgLogin from '../../../assets/img/bglogin.jpg';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const [isModalVisiblePayment, setisModalVisiblePayment] = useState(false);
  const [isModalLoginRequest, setisModalLoginRequest] = useState(false);
  const [isModalVisibleRegister, setisModalVisibleRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [registerEmail, setregisterEmail] = useState('');
  const [registerPassword, setregisterPassword] = useState('');

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

  async function registerUser() {
    setisModalVisibleRegister(false);
    try {
      await api.post('wp/v2/users/register', {
        username: registerEmail,
        email: registerEmail,
        password: registerPassword,
      });
      setisModalVisibleRegister(true);
    } catch (err) {
      Alert.alert(
        'Falha na autenticação',
        'Houve um erro no login, verifique seus dados'
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
              marginBottom: 40,
            }}
          >
            <RegisterBtnModal onPress={toggleModalOpenRegister}>
              <RegisterBtnModalText>Cadastre-se</RegisterBtnModalText>
            </RegisterBtnModal>
            <LoginBtnModal onPress={toggleModalOpenPayment}>
              <LoginBtnModalText>Entrar</LoginBtnModalText>
            </LoginBtnModal>
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

              <ForgotPassword
                onPress={() => navigation.navigate('LostPassword')}
                underlayColor="#f9f9f9"
              >
                <ForgotPasswordText>
                  Perdeu a senha? Solicite outra
                </ForgotPasswordText>
              </ForgotPassword>
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
              <TitleOne>Cadastre-se</TitleOne>
              <TitleDesc>Digite seu e-mail e senha para entrar.</TitleDesc>
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
                <ForgotPasswordText>
                  Ao cadastrar você concorda com os nossos termos de uso e
                  política de privacidade.
                </ForgotPasswordText>
              </ForgotPassword>
            </Form>
          )}
        </Container>
      </Modal>
    </>
  );
}

/*
 <SafeAreaView>
          <Button title="Entrar" onPress={toggleModalOpenPayment} />
        </SafeAreaView>
<Container>
        <Form>
          <TitleOne>Bem-vindo!kk</TitleOne>
          <TitleDesc>Acesse com seu login para continuar.</TitleDesc>
          <LoginMail>
            <LoginIcon>
              <Icon name="mail-outline" size={30} color="#D3004C" />
            </LoginIcon>
            <MailContent>
              <TitleMail>email</TitleMail>
              <MailInput
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
                value={username}
                onChangeText={setUsername}
              />
            </MailContent>
          </LoginMail>
          <LoginPass>
            <LoginIcon>
              <Icon name="lock" size={30} color="#D3004C" />
            </LoginIcon>
            <PassContent>
              <TitlePass>Senha</TitlePass>
              <PassInput
                secureTextEntry
                ref={passwordRef}
                returnKeyType="go"
                onSubmitEditing={handleSubmit}
                value={password}
                onChangeText={setPassword}
              />
            </PassContent>
            <LoginButton onPress={handleSubmit}>
              {loading ? (
                <ActivityIndicator color="#D3004C" />
              ) : (
                <Icon name="chevron-right" size={30} color="#D3004C" />
              )}
            </LoginButton>
          </LoginPass>
          <ForgotPassword
            onPress={() => navigation.navigate('LostPassword')}
            underlayColor="#f9f9f9"
          >
            <ForgotPasswordText>
              Perdeu a senha? Solicite outra
            </ForgotPasswordText>
          </ForgotPassword>
        </Form>
      </Container>
*/
