import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Header = styled.View`
  flex-direction: row;
  margin: 20px 0;
`;

export const HeaderTexts = styled.View`
  flex: 1;
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

export const SearchContent = styled.View`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  border-radius: 50px;
`;

export const SearchBtn = styled(RectButton)``;

export const Container = styled.View`
  background-color: #ffffff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 20px 20px 0 20px;
  flex: 1;
`;

export const Noticias = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  margin: 0 0 20px 0;
`;

export const NoticiasImg = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin: 0 15px 0 0;
`;

export const NoticiasTitle = styled.Text`
  font-family: 'Axiforma-Bold';
  font-size: 15px;
  color: #000000;
`;

export const NoticiasDesc = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 13px;
  color: #a8a8a8;
`;

export const FeedItem = styled.View`
  border-bottom-color: #c9c9c9;
  border-bottom-width: 0.5px;
  margin: 0 0 20px 0;
`;

export const FeedHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FeedAvatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

export const FeedIcons = styled.View`
  flex-direction: row;
  margin: 0 0 20px 10px;
`;

export const FeedData = styled.Text`
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
  color: #b1b1b1;
`;

export const NewPostBtn = styled.TouchableOpacity`
  flex-direction: row;
  background: #171717;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const NewPostBtnInative = styled.TouchableOpacity`
  flex-direction: row;
  background: #171717;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  opacity: 0.3;
`;

export const NewsPostText = styled.Text`
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
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  color: #ffffff;
  margin: 0 10px 0 0;
`;

export const NewPostBtnSubmit = styled.TouchableOpacity`
  background: #171717;
  border-radius: 8px;
  padding: 10px 0;
  margin: 20px 0;
`;

export const NewPostBtnSubmitText = styled.Text`
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

export const ContainerPost = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  margin-top: 50px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background: #f9f9f9;
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
