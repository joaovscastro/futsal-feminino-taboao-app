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

export const Container = styled.View`
  background-color: #f3f6f8;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 0;
  flex: 1;
`;

export const UltimoJogo = styled.View`
  background-color: #ffffff;
  margin: 30px 0 0 0;
  border-radius: 8px;
`;

export const JogoTitulo = styled.Text.attrs({
  numberOfLines: 1,
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
  font-size: 15px;
  color: #000000;

  text-align: center;
  margin: 10px 0;
`;

export const JogoContent = styled.View`
  flex-direction: row;
  margin: 15px 0 0 0;
`;

export const JogoTimes = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const JogoLogo = styled.Image`
  width: 70px;
  height: 70px;
`;

export const TimeName = styled.Text.attrs({
  numberOfLines: 2,
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

  font-size: 12px;
  color: #000000;
  margin: 10px 0;
  text-align: center;
  padding: 0 10px;
`;

export const JogoInfo = styled.View`
  align-items: center;
  justify-content: center;
`;

export const JogoInfoTime = styled.Text`
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
  color: #000;
  margin-bottom: 5px;
`;

export const Placar = styled.Text`
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
  font-size: 30px;
  color: #000;
  margin-bottom: 5px;
`;

export const JogoInfoData = styled.Text`
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

export const JogoDetalhesView = styled.View`
  border-top-width: 3px;
  border-top-color: #f3f3f3;
  margin-top: 10px;
`;

export const JogoDetalhes = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const JogoDetalhesTitle = styled.Text`
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
  font-size: 11px;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 1px;
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

  font-size: 16px;
  color: #000000;
  margin: 20px 0 10px 0;
`;

export const Data = styled.Text`
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
  font-size: 13px;
  color: #ffffff;
  text-align: center;
  margin: 10px 0;
`;

export const DataText = styled.Text`
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
  margin: 10px 0;
  text-align: center;
`;

export const DataTextInfo = styled.Text`
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
  margin: 10px 0;
  text-align: center;
`;

export const Escalacao = styled.View`
  margin: 0 0 20px 0;
`;

export const EscalacaoJogadora = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 15px;
`;

export const EscalacaoJogadoraAvatar = styled.Image`
  width: 40px;
  height: 40px;
`;

export const EscalacaoJogadoraNome = styled.Text`
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

  font-size: 13px;
  color: #000000;
`;

export const EscalacaoDados = styled.View`
  background-color: #000;
  padding: 10px 0;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const EscalacaoDadosText = styled.Text`
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
  color: #ffffff;
  flex: 1;
  text-align: center;
  margin: 5px 0;
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
  margin: 0 0 50px 0;
`;

export const Loadcontent = styled.View`
  margin: 20px 0 10px 0;
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

export const LoadcontentTextEmpty = styled.Text`
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
  color: #000000;
`;

export const LoadcontentTextEmptyDesc = styled.Text`
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
  margin: 5px 30px;
  text-align: center;
`;
