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

export const Logo = styled.Image`
  margin-top: 50px;
  width: 130px;
`;

export const TitleOne = styled.Text`
  ${Platform.select({
    ios: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
    android: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
  })};
  font-size: 22px;
  color: #2d2d2d;
  margin: 20px 0 0 0;
`;

export const TitleDesc = styled.Text`
  ${Platform.select({
    ios: css`
      font-family: 'SF Pro Text';
      font-weight: normal;
    `,
    android: css`
      font-family: 'SF Pro Text';
      font-weight: normal;
    `,
  })};
  font-size: 14px;
  color: #a3a3a4;
  margin: 0 0 20px 0;
`;

export const LoginMail = styled.View`
  flex-direction: row;
  margin: 20px 0;
  align-items: center;
`;

export const MailContent = styled.View`
  flex: 1;
`;

export const TitleMail = styled.Text`
  ${Platform.select({
    ios: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
    android: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
  })};
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #2d2d2d;
`;

export const MailInput = styled.TextInput.attrs({
  placeholderTextColor: '#a3a3a4',
})`
  ${Platform.select({
    ios: css`
      height: 30px;
      font-family: 'SF Pro Text';
      font-weight: normal;
    `,
    android: css`
      height: 40px;
      font-family: 'SF Pro Text';
      font-weight: normal;
    `,
  })};

  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
  font-size: 16px;
  color: #a3a3a4;
`;

export const MailInputPass = styled.TextInput.attrs({
  placeholderTextColor: '#a3a3a4',
})`
  ${Platform.select({
    ios: css`
      height: 30px;
      font-family: 'SF Pro Text';
      font-weight: normal;
    `,
    android: css`
      height: 40px;
      font-family: 'SF Pro Text';
      font-weight: normal;
    `,
  })};

  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
  font-size: 16px;
  color: #a3a3a4;
`;

export const LoginPass = styled.View`
  flex-direction: row;
  margin: 20px 0;
  align-items: center;
`;

export const TitlePass = styled.Text`
  ${Platform.select({
    ios: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
    android: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
  })};
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #2d2d2d;
`;

export const PassInput = styled.TextInput.attrs({
  placeholderTextColor: '#a3a3a4',
})`
  ${Platform.select({
    ios: css`
      height: 30px;
      font-family: 'SF Pro Text';
      font-weight: normal;
    `,
    android: css`
      height: 40px;
      font-family: 'SF Pro Text';
      font-weight: normal;
    `,
  })};

  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
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
  ${Platform.select({
    ios: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
    android: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
  })};
  font-size: 14px;

  color: #fff;
`;

export const PassContent = styled.View`
  flex: 1;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin: 20px 0 40px 0;
`;

export const ForgotPasswordText = styled.Text`
  ${Platform.select({
    ios: css`
      font-family: 'SF Pro Text';
      font-weight: normal;
    `,
    android: css`
      font-family: 'SF Pro Text';
      font-weight: normal;
    `,
  })};
  font-size: 13px;
  text-align: center;
  color: #2d2d2d;
`;

export const ForgotPasswordTextOne = styled.Text`
  ${Platform.select({
    ios: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
    android: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
  })};
  font-size: 14px;
  text-align: center;
  color: #ffffff;
`;

export const LoginBtnModal = styled.TouchableOpacity`
  margin: 5px 20px;
  padding: 10px 0;
  background: #d71435;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const LoginBtnModalText = styled.Text`
  ${Platform.select({
    ios: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
    android: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
  })};
  font-size: 14px;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

export const RegisterBtnModal = styled.TouchableOpacity`
  margin: 5px 20px;
  padding: 10px 0;
  background: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const RegisterBtnModalText = styled.Text`
  ${Platform.select({
    ios: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
    android: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
  })};
  font-size: 14px;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  color: #d71435;
`;

export const GoatButton = styled.TouchableOpacity``;

export const Loadcontent = styled.View`
  margin: 0 0 10px 0;
  justify-content: center;
  align-items: center;
`;

export const LoadcontentText = styled.Text`
  ${Platform.select({
    ios: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
    android: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
  })};
  font-size: 14px;
  color: #ffffff;
`;

export const ModalContaTitulo = styled.Text`
  ${Platform.select({
    ios: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
    android: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
  })};
  font-size: 18px;
  color: #e71531;
  margin: 16px 0;
`;

export const ModalContaTexto = styled.Text`
  ${Platform.select({
    ios: css`
      font-family: 'SF Pro Text';
      font-weight: normal;
    `,
    android: css`
      font-family: 'SF Pro Text';
      font-weight: normal;
    `,
  })};
  font-size: 14px;
  color: #000;
`;

export const ModalContaBtn = styled.TouchableOpacity`
  margin: 20px 0 0 0;
  background: #000;
  padding: 10px 30px;
  border-radius: 12px;
`;

export const ModalContaBtnText = styled.Text`
  ${Platform.select({
    ios: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
    android: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
  })};
  font-size: 14px;
  color: #fff;
`;
