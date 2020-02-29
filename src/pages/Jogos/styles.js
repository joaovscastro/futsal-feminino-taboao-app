import styled from 'styled-components/native';
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
  font-family: 'Axiforma-Bold';
  font-size: 20px;
  color: #fff;
`;

export const Container = styled.View`
  background-color: #f3f3f3;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 0 20px 0 20px;
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
  text-align: center;
  font-family: 'Axiforma-Regular';
  font-size: 16px;
  color: #000000;
  margin: 15px 3px 0 3px;
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
  font-family: 'Axiforma-Regular';
  font-size: 12px;
  color: #000000;
  margin: 10px 3px 3px 3px;
  text-align: center;
`;

export const JogoInfo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const JogoInfoTime = styled.Text`
  font-family: 'Axiforma-Bold';
  font-size: 20px;
  color: #000000;
`;

export const JogoInfoData = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 11px;
  color: #000000;
  margin-top: -8px;
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
  padding: 15px 0 5px 0;
`;

export const JogoDetalhesTitle = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 11px;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Title = styled.Text`
  font-family: 'Axiforma-Bold';
  font-size: 16px;
  color: #000000;
  line-height: 18px;
  margin: 20px 0 0 0;
`;

export const Data = styled.Text`
  font-family: 'Axiforma-Bold';
  font-size: 13px;
  color: #ffffff;
  text-align: center;
  margin-top: 10px;
`;

export const DataText = styled.Text`
  font-family: 'Axiforma-Bold';
  font-size: 12px;
  color: #000000;
  margin: 10px 0 5px 0;
  text-align: center;
`;

export const DataTextInfo = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 12px;
  color: #000000;
  margin: 10px 0 5px 0;
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
  font-family: 'Axiforma-Bold';
  font-size: 13px;
  color: #000000;
`;

export const EscalacaoJogadoraPosicao = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 12px;
  color: #aab2b7;
  margin-top: -7px;
`;

export const EscalacaoDados = styled.View`
  background-color: #000;
  padding: 10px 0;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const EscalacaoDadosText = styled.Text`
  font-family: 'Axiforma-Bold';
  font-size: 12px;
  color: #ffffff;
  flex: 1;
  text-align: center;
  margin-top: 7px;
`;

export const EscalacaoDadosNumber = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 12px;
  color: #ffffff;
  flex: 1;
  text-align: center;
  margin-top: 7px;
`;

export const Disclaimer = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 12px;
  color: #666;
  text-align: center;
  margin: 10px 0 20px 0;
`;
