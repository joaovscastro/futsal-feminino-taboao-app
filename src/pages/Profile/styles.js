import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Header = styled.View`
  flex-direction: row;
  margin: 20px 20px;
`;

export const HeaderTexts = styled.View`
  justify-content: center;
  align-items: center;
`;

export const HeaderTextName = styled.Text`
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
  font-size: 20px;
  color: #ffffff;
`;

export const Container = styled.ScrollView`
  background-color: #f3f6f8;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 35px 20px 0 20px;
`;

export const HeadProfile = styled.View`
  align-items: center;
  flex: 1;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const NameInput = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
})`
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
  background: #f9f9f9;

  text-align: center;
  width: 100%;
  height: 40px;
  color: #000000;
  font-size: 16px;
  margin: 10px 0;
`;

export const NewComentBtnSubmit = styled.TouchableOpacity`
  background: #171717;
  border-radius: 8px;
  padding: 10px 0;
  margin: 20px 0;
`;

export const NewComentBtnSubmitDisabled = styled.View`
  background: #171717;
  border-radius: 8px;
  padding: 10px 0;
  margin: 20px 0;
  opacity: 0.5;
`;

export const NewComentBtnSubmitText = styled.Text`
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
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  color: #ffffff;
  margin: 0 10px 0 0;
`;

export const ChangePhotoBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 10px;
  padding: 5px 10px;
  border: 1px solid #ec2840;
`;

export const ChangePhotoText = styled.Text`
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
  text-align: center;

  font-size: 12px;
  color: #ec2840;
  margin: 0 5px 0 0;
`;

export const BackButton = styled(RectButton)`
  flex: 1;
`;

export const BackButtonContent = styled.View`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  border-radius: 50px;
`;

export const Loadcontent = styled.View`
  margin: 0 0 10px 0;
  justify-content: center;
  align-items: center;
`;

export const LoadcontentText = styled.Text`
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
  font-size: 12px;
  color: #000000;
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
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #2d2d2d;
`;

export const Disclaimer = styled.Text`
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
  font-size: 12px;
  color: #666;
  text-align: center;
`;
