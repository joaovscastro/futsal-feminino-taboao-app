import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

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

export const Container = styled.View`
  background-color: #ffffff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 15px 20px 0 20px;
  flex: 1;
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
  font-family: 'Axiforma';
  font-weight: bold;
  font-size: 15px;
  color: #000000;
`;

export const NoticiasDesc = styled.Text`
  font-family: 'Axiforma';
  font-weight: normal;
  font-size: 13px;
  color: #a8a8a8;
`;

export const ElencoLista = styled.View`
  align-items: center;
  margin: 20px 0;
  flex: 1;
`;

export const Foto = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

export const ElencoNome = styled.Text.attrs({
  numberOfLines: 1,
})`
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
  color: #000000;
  margin: 10px 0 0 0;
`;

export const ElencoNumero = styled.Text`
  font-family: 'Axiforma-SemiBold';
  font-size: 18px;
  color: #666666;
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
