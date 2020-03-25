import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { View, Text, SafeAreaView, Alert, Image, Linking } from 'react-native';
import Svg, { Path } from 'react-native-svg';

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
  GoatButton,
  GoatButtonText,
  MoreBtn,
  MoreBtnText,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fc1936' }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Mais</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        {profile.url === 'http://impala' ? (
          <MoreItem
            onPress={() => navigation.navigate('SendNotification')}
            underlayColor="#f3f3f3"
          >
            <MoreContent>
              <Icon name="send" size={40} style={{ marginTop: -7 }} />
              <MoreText>
                <MoreTitle>Enviar notificação</MoreTitle>
                <MoreDesc>Envie notificações para os usuários</MoreDesc>
                <MoreBtn>
                  <MoreBtnText>Administrador</MoreBtnText>
                </MoreBtn>
              </MoreText>
              <Icon name="chevron-right" size={30} color="#C9C9C9" />
            </MoreContent>
          </MoreItem>
        ) : (
          <View />
        )}

        <MoreItem
          onPress={() => navigation.navigate('Profile')}
          underlayColor="#f3f3f3"
        >
          <MoreContent>
            <Image
              source={{ uri: profile.m_avatar }}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
            <MoreText>
              <MoreTitle>Perfil</MoreTitle>
              <MoreDesc>Visualize e edite seu perfil</MoreDesc>
            </MoreText>
            <Icon name="chevron-right" size={30} color="#C9C9C9" />
          </MoreContent>
        </MoreItem>

        <MoreItem
          onPress={() => navigation.navigate('Projeto')}
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
        <View>
          <GoatButton onPress={() => Linking.openURL('https://goatspace.co')}>
            <GoatButtonText>Design e desenvolvimento</GoatButtonText>
            <Svg width="200" height="33" viewBox="0 0 200 33">
              <Path
                fill="#000"
                d="M197.386 24.79c-1.439 0-2.615-1.15-2.615-2.578v-.073c0-1.418 1.166-2.578 2.615-2.578 1.438 0 2.614 1.15 2.614 2.578v.073c0 1.429-1.165 2.578-2.614 2.578zM193.601 14.128c0-6.185-3.257-9.846-8.747-9.846-5.674 0-8.821 4.54-8.821 10.395 0 6.076 3.257 10.176 9.479 10.176 3.038 0 5.454-1.098 7.357-2.636l-2.159-2.928c-1.684 1.171-3.075 1.684-4.722 1.684-2.489 0-4.246-1.098-4.612-4.831h12.116c.036-.55.109-1.355.109-2.014zm-5.16-1.244h-7.065c.257-3.66 1.538-5.051 3.587-5.051 2.489 0 3.478 1.903 3.478 4.831v.22zM169.496 4.282c-5.673 0-9.26 4.283-9.26 10.432 0 6.186 3.55 10.139 9.333 10.139 2.562 0 4.612-.842 6.369-2.27l-2.269-3.257c-1.428.915-2.416 1.354-3.844 1.354-2.452 0-4.099-1.5-4.099-6.003 0-4.502 1.537-6.368 4.136-6.368 1.428 0 2.562.439 3.807 1.39l2.269-3.074c-1.83-1.574-3.843-2.343-6.442-2.343zM158.648 18.081V4.868h-4.538l-.293 1.757c-1.171-1.428-2.745-2.343-4.905-2.343-4.978 0-8.016 4.283-8.016 10.286 0 6.185 2.636 10.285 7.504 10.285 2.342 0 4.319-1.208 5.673-3.002.696 1.574 2.05 2.526 4.612 3.002l1.537-3.77c-1.171-.586-1.574-1.208-1.574-3.002zm-8.931 2.892c-2.013 0-3.404-1.537-3.404-6.405 0-4.54 1.465-6.442 3.697-6.442 1.464 0 2.489.732 3.441 1.866v8.602c-1.025 1.574-2.123 2.379-3.734 2.379zM132.745 4.282c-2.013 0-4.099.879-5.637 2.855l-.256-2.269h-4.575V32.32l5.197-.585v-8.968c1.208 1.391 2.855 2.087 4.795 2.087 4.868 0 7.687-4.393 7.687-10.322 0-6.259-2.16-10.249-7.211-10.249zm-2.013 16.69c-1.354 0-2.416-.621-3.258-1.902v-8.455c.879-1.465 2.16-2.49 3.661-2.49 2.159 0 3.404 1.575 3.404 6.443 0 4.538-1.428 6.405-3.807 6.405zM113.217 4.282c-4.685 0-7.686 2.49-7.686 5.784 0 2.928 1.83 4.868 5.746 5.966 3.587.988 4.283 1.464 4.283 2.928 0 1.317-1.245 2.123-3.184 2.123-1.94 0-3.734-.769-5.198-1.904l-2.562 2.855c1.83 1.684 4.539 2.819 7.906 2.819 4.612 0 8.382-2.27 8.382-6.296 0-3.44-2.196-5.05-6.076-6.112-3.404-.989-4.063-1.501-4.063-2.636 0-1.061.952-1.757 2.672-1.757 1.684 0 3.258.55 4.831 1.538l1.977-2.965c-1.83-1.464-4.209-2.343-7.028-2.343zM102.602 20.058c-.805.44-1.501.659-2.196.659-1.318 0-1.94-.732-1.94-2.636V8.528h3.953l.512-3.66h-4.465V0l-5.198.622v4.246h-2.891v3.66h2.891v9.663c0 4.32 2.05 6.625 6.076 6.662 1.721 0 3.624-.513 5.051-1.501l-1.793-3.294zM88.988 18.081V4.868h-4.539l-.293 1.757c-1.17-1.428-2.745-2.343-4.904-2.343-4.978 0-8.016 4.283-8.016 10.286 0 6.185 2.635 10.285 7.503 10.285 2.343 0 4.32-1.208 5.674-3.002.695 1.574 2.05 2.526 4.612 3.002l1.537-3.77c-1.171-.586-1.574-1.208-1.574-3.002zm-8.93 2.892c-2.014 0-3.405-1.537-3.405-6.405 0-4.54 1.464-6.442 3.697-6.442 1.464 0 2.489.732 3.44 1.866v8.602c-1.024 1.574-2.123 2.379-3.733 2.379zM46.491 4.868L46.2 6.625c-1.355-1.428-3.075-2.343-5.051-2.343-4.942 0-7.943 4.283-7.943 9.92 0 5.82 2.489 9.919 7.357 9.919 2.342 0 4.063-1.062 5.234-2.526v2.855c0 2.745-1.171 3.99-4.282 3.99-2.123 0-3.624-.55-4.832-1.172l-1.574 3.258c1.281.842 3.404 1.793 6.808 1.793 5.857 0 9.078-2.745 9.078-8.528V4.868H46.49zm-4.355 15.373c-2.123 0-3.514-1.537-3.514-6.04 0-4.172 1.537-6.075 3.843-6.075 1.428 0 2.38.695 3.331 1.83v7.942c-.988 1.538-2.123 2.343-3.66 2.343zM61.208 4.282c-5.857 0-9.334 4.1-9.334 10.286 0 6.441 3.514 10.285 9.297 10.285 5.82 0 9.297-4.136 9.297-10.285 0-6.442-3.477-10.286-9.26-10.286zm0 3.88c2.525 0 3.843 1.94 3.843 6.406 0 4.428-1.318 6.405-3.88 6.405s-3.88-1.94-3.88-6.405c0-4.43 1.318-6.406 3.917-6.406z"
              ></Path>
              <Path
                fill="#AB6DEF"
                fillRule="evenodd"
                d="M.97 26.333L21.917 5.386c.61.61.986 1.451.986 2.38v3.913L7.263 27.32H3.352c-.93 0-1.771-.377-2.38-.986z"
                clipRule="evenodd"
              ></Path>
              <Path
                fill="#005DFF"
                fillRule="evenodd"
                d="M7.25 27.319l15.653-15.653v7.22L14.47 27.32H7.25z"
                clipRule="evenodd"
              ></Path>
              <Path
                fill="#FFDF4B"
                fillRule="evenodd"
                d="M14.456 27.319l8.447-8.447v5.08a3.367 3.367 0 01-3.367 3.367h-5.08z"
                clipRule="evenodd"
              ></Path>
              <Path
                fill="#3BD84B"
                fillRule="evenodd"
                d="M21.933 5.413L.986 26.36A3.356 3.356 0 010 23.98v-3.913l15.64-15.64h3.912c.93 0 1.771.377 2.38.986z"
                clipRule="evenodd"
              ></Path>
              <Path
                fill="#FFB880"
                fillRule="evenodd"
                d="M15.653 4.427L0 20.081v-7.222l8.432-8.432h7.221z"
                clipRule="evenodd"
              ></Path>
              <Path
                fill="#FF71FF"
                fillRule="evenodd"
                d="M8.447 4.427L0 12.874v-5.08a3.367 3.367 0 013.367-3.367h5.08z"
                clipRule="evenodd"
              ></Path>
            </Svg>
          </GoatButton>
        </View>
      </Container>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(More);
