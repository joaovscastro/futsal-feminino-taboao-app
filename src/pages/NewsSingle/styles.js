import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const BackButton = styled(RectButton)`
  margin: 10px 20px 0 20px;
`;

export const BackButtonContent = styled.View`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  border-radius: 50px;
`;

export const Container = styled.ScrollView`
  background-color: #f3f3f3;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 35px 20px 0 20px;
  margin-top: -25px;
`;

export const Title = styled.Text`
  font-family: 'Axiforma-Bold';
  font-size: 20px;
  color: #000000;
`;

export const Data = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 10px;
  color: #b1b1b1;
`;

export const Content = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 12px;
  text-align: justify;
  color: #969393;
  margin: 15px 0;
`;

export const Share = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 12px;
  color: #000000;
`;

export const TitleComent = styled.Text`
  font-family: 'Axiforma-Bold';
  font-size: 14px;
  color: #000000;
  line-height: 18px;
`;

export const Comentario = styled.View`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 10px 0;
  padding: 15px;
`;

export const ComentarioCont = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ComentName = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 12px;
  color: #000000;
  flex: 1;
  margin: 7px 0 0 10px;
`;

export const DataComent = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 9px;
  color: #969393;
  margin-top: 7px;
`;

export const ComentCont = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 12px;
  color: #969393;
  margin: 10px 0 0 0;
`;

export const ComentAvatar = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 15px;
`;
