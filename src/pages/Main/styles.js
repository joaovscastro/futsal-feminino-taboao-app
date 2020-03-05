import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Header = styled.ImageBackground`
  background: #fc1936;
  padding: 0 20px;
`;

export const HeaderProfile = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 22px 0;
`;

export const HeaderName = styled.Text`
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

  font-size: 16px;
  color: #fff;
`;

export const HeaderNameText = styled.Text`
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

  font-size: 16px;
  color: #fff;
`;

export const AvatarLink = styled.TouchableOpacity``;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  background: #000;

  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 28px;

  margin-bottom: -80px;
`;

export const CardTitle = styled.Text`
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
  color: #fff;
`;

export const CardJogo = styled.Text.attrs({
  numberOfLines: 2,
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

  font-size: 20px;
  letter-spacing: -1px;
  color: #fff;
  margin: 6px 30px 24px 0;
`;

export const CardMore = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const CardMoreText = styled.Text`
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
  color: #fff;
  margin: 0 10px 0 0;
`;

export const LogoTaboao = styled.Image`
  width: 60px;
  height: 60px;
`;

export const CardButtonMore = styled.TouchableOpacity`
  background: #f3f6f8;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
`;

export const TitleNews = styled.Text`
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
  color: #171717;
  margin: 120px 0 15px 20px;
`;

export const News = styled(RectButton)`
  width: 146px;
  margin-left: 20px;
`;

export const NewsImg = styled.Image`
  width: 146px;
  height: 146px;
  border-radius: 12px;
  margin-bottom: 8px;
`;

export const NewsTitle = styled.Text.attrs({
  numberOfLines: 2,
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

  font-size: 12px;

  color: #171717;
`;

export const NewsDate = styled.Text`
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
  opacity: 0.5;

  margin-top: 5px;
`;

export const TitleElenco = styled.Text`
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
  color: #ffffff;
  text-transform: uppercase;
  margin: 0 0 0 20px;
`;

export const Elenco = styled(RectButton)`
  width: 60px;
  align-items: center;
  justify-content: center;
  margin-left: 19px;
`;

export const ElencoImg = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-bottom: 8px;
`;

export const ElencoName = styled.Text`
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

  font-size: 16px;

  color: #ffffff;

  opacity: 0.5;
`;

export const ElencoNumber = styled.Text`
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
  margin-right: 2px;
`;

export const VerElenco = styled.TouchableOpacity`
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ElencoLine = styled.View`
  width: 1px;
  height: 70px;
  border-color: #ddd;
  border-width: 1;
`;

export const AboutButton = styled(RectButton)`
  margin: 40px 20px;
  border-radius: 12px;
`;

export const About = styled.ImageBackground`
  height: 150px;
  border-radius: 12px;
  justify-content: center;
  padding: 10px 15px;
`;

export const AboutSubtitle = styled.Text`
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
  color: #ffffff;
`;

export const AboutTitle = styled.Text`
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
  color: #ffffff;
`;

export const ElencoBtn = styled(RectButton)`
  margin-left: 20px;
`;

export const MaisNoticias = styled.Text`
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
  margin: 0 10px 0 0;
`;

export const MaisElenco = styled.Text`
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
  color: #fff;
  margin: 0 10px 0 0;
`;
