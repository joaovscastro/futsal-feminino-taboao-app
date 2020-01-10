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

`;

export const AvatarContent = styled.View`
flex: 1;
align-items: flex-end;
justify-content: center;
`;

export const Avatar = styled.Image`

`;

export const Container = styled.ScrollView`
background-color: #ffffff;
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

export const MelhoresMomentosTitle = styled.Text`
font-family: 'Axiforma';
font-weight: 500;
font-size: 14px;
color: #000000;
margin: 10px 0;
`;



