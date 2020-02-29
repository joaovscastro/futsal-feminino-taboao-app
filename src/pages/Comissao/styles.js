import styled from 'styled-components/native';
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
  margin: 20px 20px 10px 20px;
`;

export const HeaderTexts = styled.View``;

export const HeaderTextName = styled.Text`
  font-family: 'Axiforma-Bold';
  font-size: 20px;
  color: #fff;
  margin-top: 7px;
`;

export const Container = styled.ScrollView`
  background-color: #f3f3f3;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 35px 20px 0 20px;
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
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Foto = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const ElencoNome = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 14px;
  color: #000000;
  margin-top: 15px;
`;

export const ElencoNumero = styled.Text`
  font-family: 'Axiforma-SemiBold';
  font-size: 18px;
  color: #666666;
  margin-top: 6px;
`;
