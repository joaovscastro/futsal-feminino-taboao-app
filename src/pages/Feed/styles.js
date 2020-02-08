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
  font-family: 'Axiforma-Bold';
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
  font-family: 'Axiforma-Bold';
  font-size: 15px;
  color: #000000;
`;

export const NoticiasDesc = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 13px;
  color: #a8a8a8;
`;

export const FeedContent = styled.View``;

export const FeedItem = styled.View`
  border-bottom-color: #c9c9c9;
  border-bottom-width: 0.5px;
  margin: 0 0 20px 0;
`;

export const FeedHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FeedAvatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

export const FeedName = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 12px;
  line-height: 13px;
  color: #000000;
  margin: 7px 0 0 10px;
  flex: 1;
`;

export const FeedContentText = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 14px;
  line-height: 13px;
  color: #000000;
  margin: 20px;
`;

export const FeedIcons = styled.View`
  flex-direction: row;
  margin: 0 0 20px 20px;
`;

export const FeedData = styled.Text`
  font-family: 'Axiforma-Regular';
  font-size: 10px;
  color: #b1b1b1;
`;
