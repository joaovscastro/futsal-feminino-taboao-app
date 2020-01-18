import styled from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";

export const Header = styled.View`
flex-direction: row;
margin: 10px 20px;
`;

export const HeaderTexts = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

export const HeaderTextName = styled.Text`
font-family: 'Axiforma';
font-weight: bold;
font-size: 20px;
color: #fff;
`;

export const Container = styled.ScrollView`
background-color: #f3f3f3;
border-top-left-radius: 25px;
border-top-right-radius: 25px;
padding: 0 20px 0 20px;
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
font-family: 'Axiforma';
font-weight: 500;
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
font-family: 'Axiforma';
font-weight: normal;
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
font-family: 'Axiforma';
font-weight: bold;
font-size: 20px;
color: #000000;
`;

export const JogoInfoData = styled.Text`
font-family: 'Axiforma';
font-weight: normal;
font-size: 12px;
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
font-family: 'Axiforma';
font-weight: normal;
font-size: 11px;
color: #000000;
text-transform: uppercase;
letter-spacing: 1px;
`;
