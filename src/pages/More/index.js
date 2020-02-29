import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { View, SafeAreaView, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import {
  Header,
  HeaderTexts,
  HeaderTextName,
  MoreItem,
  Container,
  MoreContent,
  MoreText,
  MoreTitle,
  MoreDesc,
  MoreTitleRed,
  MoreBtn,
  MoreBtnText,
} from './styles';

import fotoAvatar from '../../../assets/img/avatar.png';
import noticiaPlaceholder from '../../../assets/img/noticias-placeholder.jpg';
import Brasao from '../../../assets/img/brasao.png';

import { signOut } from '../../store/modules/auth/actions';

function More({ profile, navigation }) {
  function Sair() {
    Alert.alert(
      'Deseja realmente sair?',
      'Você será desconectado',
      [
        { text: 'Não', onPress: () => navigation.goBack() },
        { text: 'Sim', onPress: () => handleLogout() },
      ],
      { cancelable: false }
    );
  }

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Mais</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        <MoreItem
          onPress={() => navigation.navigate('Profile')}
          underlayColor="#f3f3f3"
        >
          <MoreContent>
            <Icon name="face-profile" size={40} style={{ marginTop: -7 }} />
            <MoreText>
              <MoreTitle>Perfil</MoreTitle>
              <MoreDesc>Visualize e edite seu perfil</MoreDesc>
            </MoreText>
            <Icon name="chevron-right" size={30} color="#C9C9C9" />
          </MoreContent>
        </MoreItem>

        <MoreItem
          onPress={() => navigation.navigate('Elenco')}
          underlayColor="#f3f3f3"
        >
          <MoreContent>
            <Icon name="soccer" size={40} style={{ marginTop: -7 }} />
            <MoreText>
              <MoreTitle>O Projeto</MoreTitle>
              <MoreDesc>Conheça um pouco mais do nosso projeto</MoreDesc>
            </MoreText>
            <Icon name="chevron-right" size={30} color="#C9C9C9" />
          </MoreContent>
        </MoreItem>

        <MoreItem
          onPress={() => navigation.navigate('Elenco')}
          underlayColor="#f3f3f3"
        >
          <MoreContent>
            <Icon
              name="tshirt-crew-outline"
              size={40}
              style={{ marginTop: -7 }}
            />
            <MoreText>
              <MoreTitle>Elenco</MoreTitle>
              <MoreDesc>Conheça todo o nosso elenco</MoreDesc>
            </MoreText>
            <Icon name="chevron-right" size={30} color="#C9C9C9" />
          </MoreContent>
        </MoreItem>

        <MoreItem
          onPress={() => navigation.navigate('Comissao')}
          underlayColor="#f3f3f3"
        >
          <MoreContent>
            <Icon name="stamper" size={40} style={{ marginTop: -7 }} />
            <MoreText>
              <MoreTitle>Comissão técnica</MoreTitle>
              <MoreDesc>
                Conheça toda a equipre por trás do projeto Futsal Feminino
                Taboão
              </MoreDesc>
            </MoreText>
            <Icon name="chevron-right" size={30} color="#C9C9C9" />
          </MoreContent>
        </MoreItem>

        <MoreItem onPress={Sair} underlayColor="#f3f3f3">
          <MoreContent>
            <Icon
              name="close-box-outline"
              size={40}
              color="#EC2840"
              style={{ marginTop: -7 }}
            />
            <MoreText>
              <MoreTitleRed>Sair</MoreTitleRed>
              <MoreDesc>É hora de dizer adeus?</MoreDesc>
            </MoreText>
            <Icon name="chevron-right" size={30} color="#C9C9C9" />
          </MoreContent>
        </MoreItem>
      </Container>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(More);
