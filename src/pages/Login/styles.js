import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background: #f9f9f9;
`;

export const Form = styled.View`
  align-self: stretch;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background: #f9f9f9;
  margin: 0 20px;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-top: 50px;
  width: 130px;
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
  color: #2d2d2d;
  margin: 20px 0 0 0;
`;

export const TitleDesc = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #a3a3a4;
  margin: 0 0 20px 0;
`;

export const LoginMail = styled.View`
  flex-direction: row;
  margin: 20px 0;
  align-items: center;
`;

export const LoginIcon = styled.View`
  width: 48px;
  height: 48px;
  ${Platform.select({
    ios: css`
      background: #f5e0e8;
    `,
    android: css`
      background: #f5e0e8;
    `,
  })};
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
  color: #2d2d2d;
`;

export const MailInput = styled.TextInput`
  ${Platform.select({
    ios: css`
      height: 30px;
    `,
    android: css`
      height: 40px;
    `,
  })};
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #a3a3a4;
`;

export const LoginPass = styled.View`
  flex-direction: row;
  margin: 20px 0;
  align-items: center;
`;

export const TitlePass = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #2d2d2d;
`;

export const PassInput = styled.TextInput`
  ${Platform.select({
    ios: css`
      height: 30px;
    `,
    android: css`
      height: 40px;
    `,
  })};
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #a3a3a4;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 48px;
  background: #000000;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
`;

export const PassContent = styled.View`
  flex: 1;
`;

export const RequestAcess = styled.TouchableOpacity`
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
  color: #d3004c;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin: 20px 0 40px 0;
`;

export const ForgotPasswordText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #2d2d2d;
`;

export const LoginBtn = styled.TouchableOpacity`
  padding: 20px;
  margin: 10px;
  background: #f00;
`;

export const LoginBtnModal = styled.TouchableOpacity`
  margin: 5px 20px;
  padding: 15px 15px 3px 15px;
  background: #d71435;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const LoginBtnModalText = styled.Text`
  font-family: 'Axiforma-Bold';
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

export const RegisterBtnModal = styled.TouchableOpacity`
  margin: 5px 20px;
  padding: 15px 15px 3px 15px;
  background: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const RegisterBtnModalText = styled.Text`
  font-family: 'Axiforma-Bold';
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #d71435;
`;
