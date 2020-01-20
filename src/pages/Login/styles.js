import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";


export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === "ios",
  behavior: "padding"
})`
  flex: 1;
  align-items: center;
  justify-content: center;
margin-top: 50px;
border-top-left-radius: 32px;
border-top-right-radius: 32px;
background: #f9f9f9;
`;

export const Form = styled.View`
align-self: stretch;
border-top-left-radius: 32px;
border-top-right-radius: 32px;
background: #f9f9f9;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;

`;

export const Logo = styled.Image`
margin-top: 50px;
`;


export const ContainerHome = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
border-top-left-radius: 32px;
border-top-right-radius: 32px;
background: #f9f9f9;
background: #f00;
`;

export const TitleOne = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: #2D2D2D;
  margin: 20px 0 0 25px;
`;

export const TitleDesc = styled.Text`
font-style: normal;
font-weight: normal;
font-size: 14px;
color: #A3A3A4;
margin: 0 0 20px 25px;
`;

export const LoginMail = styled.View`
flex-direction: row;
margin: 20px 25px;
align-items: center;
`;

export const LoginIcon = styled.View`
width: 48px;
height: 48px;
${Platform.select({
  ios: css`background: #F5E0E8;`,
  android: css`background: #F5E0E8;` })};
border-radius: 12px;
align-items: center;
justify-content: center;
margin: 0 10px 0 0;
`;

export const MailContent = styled.View`
flex: 1;
`;

export const TitleMail = styled.Text`
font-style: normal;
font-weight: normal;
font-size: 12px;
letter-spacing: 1px;
text-transform: uppercase;
color: #2D2D2D;
`;

export const MailInput = styled.TextInput`
${Platform.select({
  ios: css`height: 30px;`,
  android: css`height: 40px;` })};
border-bottom-color: rgba(0, 0, 0, 0.2);
border-bottom-width: 1px;
font-style: normal;
font-weight: normal;
font-size: 16px;
color: #A3A3A4;
`;

export const LoginPass = styled.View`
flex-direction: row;
margin: 20px 25px;
align-items: center;
`;

export const TitlePass = styled.Text`
font-style: normal;
font-weight: normal;
font-size: 12px;
letter-spacing: 1px;
text-transform: uppercase;
color: #2D2D2D;
`;

export const PassInput = styled.TextInput`
${Platform.select({
  ios: css`height: 30px;`,
  android: css`height: 40px;` })};
border-bottom-color: rgba(0, 0, 0, 0.2);
border-bottom-width: 1px;
font-style: normal;
font-weight: normal;
font-size: 16px;
color: #A3A3A4;
`;


export const LoginButton = styled(RectButton)`
width: 80px;
height: 48px;
background: #F5E0E8;
border-radius: 12px;
align-items: center;
justify-content: center;
`;

export const PassContent = styled.View`
flex: 1;
`;

export const RequestAcess = styled(RectButton)`
height: 58px;
border-radius: 10px;
align-items: center;
justify-content: center;
margin: 10px 25px;
border: 2px solid rgba(211, 0, 76, 0.1);
`;

export const RequestAcessText = styled.Text`
font-style: normal;
font-weight: bold;
font-size: 15px;
color: #D3004C;
`;


export const ForgotPassword = styled(RectButton)`
margin-top: 30px;
`;

export const ForgotPasswordText = styled.Text`
font-style: normal;
font-weight: 600;
font-size: 14px;
text-align: center;
color: #2D2D2D;
`;
