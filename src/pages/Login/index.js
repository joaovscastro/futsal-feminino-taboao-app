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
} from './styles';

import LogoImg from '../../../assets/img/logo.png';
import Wpp from '../../../assets/img/wpp.jpeg';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(username, password));
  }

  return (
    <ImageBackground
      source={Wpp}
      style={{
        flex: 1,
        width: null,
        height: null,
        backgroundColor: '#f9f9f9',
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: '#f00',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Image source={LogoImg} style={{ width: 120 }} resizeMode="contain" />
        </View>

        <View
          style={{
            backgroundColor: '#000',
            flex: 1,
            justifyContent: 'flex-start',
          }}
        >
          <Text style={{ color: '#fff' }}>Bem vindo(a) ao nosso app</Text>
          <Text style={{ color: '#fff' }}>
            Agora você pode ficar mais próximo do nosso projeto.
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Button title="Cadastrar" />
            <Button title="Entrar" />
          </View>
        </View>
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
    </ImageBackground>
  );
}
