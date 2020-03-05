import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Header = styled.View`
  flex-direction: row;
  margin: 20px 20px 10px 20px;
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
  padding: 35px 20px 0 20px;
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

export const NoticiasTitle = styled.Text.attrs({
  numberOfLines: 3,
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
  line-height: 20px;
  font-size: 14px;
  color: #171717;
`;

export const NoticiasDesc = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-family: 'Axiforma-Regular';
  font-size: 13px;
  color: #a8a8a8;
`;
