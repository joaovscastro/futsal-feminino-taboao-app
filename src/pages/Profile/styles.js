import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

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

export const SearchBtn = styled(RectButton)``;

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
  color: #a8a8a8;
`;

export const HeadProfile = styled.View`
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Name = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 20px;
  color: #000000;
  margin: 10px 0;
`;

export const Medalhas = styled.View`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
`;

export const MedalhaTitle = styled.Text`
  font-family: 'Axiforma-SemiBold';
  font-size: 18px;
  color: #000000;
`;

export const Pontos = styled.View`
  background: #ec2840;
  border-radius: 18px;
  padding: 10px 10px 0 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const PontosTitle = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 16px;
  color: #ffffff;
  margin-right: 10px;
`;

export const PontosNumero = styled.Text`
  font-family: 'Axiforma-SemiBold';
  font-size: 16px;
  color: #ffffff;
`;
