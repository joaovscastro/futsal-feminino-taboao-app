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
} from 'react-native';

import Modal from 'react-native-modal';

import { signInRequest } from '../../store/modules/auth/actions';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
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
} from './styles';

import LogoImg from '../../../assets/img/logo.png';
import BgLogin from '../../../assets/img/bglogin.jpg';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const [isModalVisiblePayment, setisModalVisiblePayment] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        <SafeAreaView>
          <Button title="Entrar" onPress={toggleModalOpenPayment} />
        </SafeAreaView>
      </ImageBackground>
      <Modal
        isVisible={isModalVisiblePayment}
        onBackdropPress={() => toggleModalPayment()}
        style={{
          justifyContent: 'flex-end',
        }}
      >
        <Container
          
        >
          <MailInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={username}
            onChangeText={setUsername}
          />
          <Text>aygdasd</Text>
          <Text>aygdasd</Text>
          <Text>aygdasd</Text>
          <Text>aygdasd</Text>
        </Container>
      </Modal>
    </>
  );
}

/*
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
