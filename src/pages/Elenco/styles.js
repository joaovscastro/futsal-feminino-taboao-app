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


export const SearchContent = styled.View`
width: 30px;
height: 30px;
align-items: center;
justify-content: center;
background-color: #f3f3f3;
border-radius: 50px;
`;

export const SearchBtn = styled(RectButton)`

`;


export const Container = styled.ScrollView`
background-color: #f3f3f3;
border-top-left-radius: 25px;
border-top-right-radius: 25px;
padding: 35px 20px 0 20px;
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
font-family: 'Axiforma';
font-weight: bold;
font-size: 15px;
color: #000000;
`;

export const NoticiasDesc = styled.Text`
font-family: 'Axiforma';
font-weight: normal;
font-size: 13px;
color: #A8A8A8;
`;
