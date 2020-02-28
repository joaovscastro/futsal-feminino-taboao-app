import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Header = styled.View`
  flex-direction: row;
  margin: 20px 20px 10px 20px;
`;

export const HeaderTexts = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

export const HeaderTextName = styled.Text`
  ${Platform.select({
    ios: css`
      font-family: 'Axiforma-Bold';
    `,
    android: css`
      font-family: 'Axiforma Bold';
    `,
  })};

  font-size: 20px;
  color: #fff;
`;

export const HeaderTextDesc = styled.Text`
  ${Platform.select({
    ios: css`
      font-family: 'Axiforma-SemiBold';
      font-size: 12px;
    `,
    android: css`
      font-family: 'Axiforma SemiBold';
      font-size: 10px;
    `,
  })};

  color: #fff;
  margin-top: -7px;
`;

export const AvatarContent = styled.View`
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
`;

export const Title = styled.Text`
  font-family: 'Axiforma-Bold';
  font-size: 18px;
  color: #000000;
  margin: 30px 20px 15px 20px;
`;

export const Destaque = styled(RectButton)`
  margin: 0 20px;
  border-radius: 8px;
  box-shadow: 0px -40px 10px rgba(4, 4, 4, 0.6);
`;

export const DestaqueBg = styled.ImageBackground`
  height: 133px;
  border-radius: 8px;
  justify-content: flex-end;
  padding: 10px 15px;
`;

export const DestaqueTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-family: 'Axiforma-SemiBold';
  font-size: 18px;
  color: #fffefe;
`;

export const MelhoresMomentos = styled.ScrollView`
  margin: 0 0 0 20px;
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
  font-family: 'Axiforma-SemiBold';
  font-size: 14px;
  color: #000000;
  margin: 10px 0;
`;

export const UltimoJogo = styled.View`
  background-color: #ffffff;
  margin: 30px 20px 0 20px;
  border-radius: 8px;
  padding-top: 20px;
`;

export const JogoTitulo = styled.Text.attrs({
  numberOfLines: 1,
})`
  text-align: center;
  font-family: 'Axiforma-SemiBold';
  font-size: 16px;
  color: #000000;
  margin: 15px 3px 0 3px;
`;

export const JogoData = styled.Text.attrs({
  numberOfLines: 1,
})`
  text-align: center;
  font-family: 'Axiforma-Regular';
  font-size: 14px;
  color: #000000;
  margin: 0 0 15px 0;
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
  font-family: 'Axiforma-Regular';
  font-size: 11px;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Elenco = styled.ScrollView`
  margin: 0 0 0 20px;
`;

export const ElencoContent = styled(RectButton)`
  margin: 0 16px 0 0;
`;

export const ElencoFoto = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const ElencoName = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: 'Axiforma-Regular';
  font-size: 11px;
  color: #000000;
  text-align: center;
  margin: 5px 0 0 0;
`;

export const Noticias = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  margin: 0 20px 20px 20px;
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
  font-family: 'Axiforma-Bold';
  font-size: 14px;
  color: #000000;
`;

export const NoticiasDesc = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-family: 'Axiforma-Regular';
  font-size: 13px;
  color: #a8a8a8;
`;

export const MoreBtn = styled.View`
  background-color: #ec2840;
  width: 120px;
  border-radius: 50px;
  margin: 0 auto;
`;

export const MoreBtnText = styled.Text`
  font-family: 'Axiforma-Bold';
  text-transform: uppercase;
  font-size: 10px;
  color: #ffffff;

  text-align: center;
  padding-top: 6px;
`;

export const MoreElenco = styled(RectButton)`
  background-color: #000000;
  width: 100px;
  border-radius: 8px;
  margin: 5px auto 0 auto;
`;

export const MoreElencoText = styled.Text`
  font-family: 'Axiforma-Bold';
  text-transform: uppercase;
  font-size: 10px;
  color: #ffffff;

  text-align: center;
  padding-top: 6px;
`;
