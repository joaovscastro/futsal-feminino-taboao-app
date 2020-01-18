import styled from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";

export const Header = styled.View`
flex-direction: row;
margin: 10px 20px;
`;

export const HeaderTexts = styled.View`
flex-direction: column;
flex: 1;
justify-content: center;
`;

export const HeaderTextName = styled.Text`
font-family: 'Axiforma';
font-weight: bold;
font-size: 20px;
color: #fff;

`;

export const HeaderTextDesc = styled.Text`
font-family: 'Axiforma';
font-weight: 600;
font-size: 12px;
color: #fff;
margin-top: -7px;
`;

export const AvatarContent = styled.View`
flex: 1;
align-items: flex-end;
justify-content: center;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Container = styled.ScrollView`
background-color: #f3f3f3;
border-top-left-radius: 25px;
border-top-right-radius: 25px;
padding: 0 20px;
`;

export const Title = styled.Text`
font-family: 'Axiforma';
font-weight: bold;
font-size: 18px;
color: #000000;
margin: 30px 0 15px 0;
`;

export const Destaque = styled(RectButton)`
border-radius: 8px;
box-shadow: 0px -40px 10px rgba(4, 4, 4, 0.6);

`;

export const DestaqueBg = styled.ImageBackground`
height: 133px;
border-radius: 8px;
justify-content: flex-end;
padding: 10px 15px;
`;

export const DestaqueTitle = styled.Text`
font-family: 'Axiforma';
font-weight: 500;
font-size: 18px;
color: #FFFEFE;
`;

export const MelhoresMomentos = styled.ScrollView`

`;

export const MelhoresMomentosItem = styled(RectButton)`
width: 240px;
height: 140px;
border-radius: 8px;
margin: 0 20px 0 0;
`;

export const MelhoresMomentosImg = styled.Image`
width: 240px;
height: 115px;
border-radius: 8px;
`;

export const MelhoresMomentosTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
font-family: 'Axiforma';
font-weight: 500;
font-size: 14px;
color: #000000;
margin: 10px 0;
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

export const Elenco = styled.ScrollView`

`;

export const ElencoContent = styled.View`
margin: 0 16px 0 0;
`;

export const ElencoFoto = styled.Image`
width: 80px;
height: 80px;
border-radius: 40px;
`;

export const ElencoName = styled.Text.attrs({
  numberOfLines: 1,
})`
font-family: 'Axiforma';
font-weight: normal;
font-size: 11px;
color: #000000;
text-align: center;
margin: 5px 0 0 0;
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
  numberOfLines: 2,
})`
font-family: 'Axiforma';
font-weight: bold;
font-size: 14px;
color: #000000;
`;

export const NoticiasDesc = styled.Text.attrs({
  numberOfLines: 2,
})`
font-family: 'Axiforma';
font-weight: normal;
font-size: 13px;
color: #A8A8A8;
`;


