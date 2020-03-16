import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const BackButton = styled(RectButton)`
  margin: 20px 20px 0 20px;
`;

export const BackButtonContent = styled.View`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  border-radius: 50px;
`;

export const Container = styled.ScrollView`
  background-color: #f3f3f3;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 20px 0 0 0;
  margin-top: -25px;
`;

export const Title = styled.Text`
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
  color: #171717;
  margin: 0 20px;
`;

export const Data = styled.Text`
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
  color: #989898;
  opacity: 0.8;
  margin: 5px 20px 0 20px;
`;

export const TitleComent = styled.Text`
  font-family: 'Axiforma-Bold';
  font-size: 14px;
  color: #000000;
  line-height: 18px;
`;

export const Comentario = styled.View`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 10px 0;
  padding: 15px;
`;

export const ComentarioCont = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ComentName = styled.Text`
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
  color: #000;

  flex: 1;
  margin: 0 0 0 10px;
`;

export const DataComent = styled.Text`
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
  font-size: 10px;
  color: #969393;
`;

export const ComentAvatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

export const NewComentBtnSubmit = styled.TouchableOpacity`
  background: #171717;
  border-radius: 8px;
  padding: 10px 0;
  margin: 20px 0;
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

export const ContainerComent = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  margin-top: 50px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background: #f9f9f9;
`;

export const ComentEmpty = styled.Text`
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
  color: #989898;
  opacity: 0.8;
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
      font-weight: bold;
    `,
    android: css`
      font-family: 'SF Pro Text';
      font-weight: bold;
    `,
  })};
  font-size: 12px;
  color: #000000;
`;
