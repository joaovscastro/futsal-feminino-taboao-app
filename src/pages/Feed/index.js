import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  FlatList,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { parseJSON, format, formatRelative, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import HTMLView from 'react-native-htmlview';
import HTML from 'react-native-render-html';

import Svg, { Path } from 'react-native-svg';

import api from '../../services/api';
import Lottie from 'lottie-react-native';

import Modal from 'react-native-modal';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import {
  Container,
  Header,
  HeaderTexts,
  HeaderTextName,
  FeedContent,
  FeedItem,
  FeedHeader,
  FeedAvatar,
  FeedName,
  FeedContentText,
  FeedIcons,
  FeedData,
  NewPostBtn,
  NewPostBtnInative,
  NewsPostText,
  NewPostBtnSubmit,
  NewPostBtnSubmitText,
  Loadcontent,
  LoadcontentText,
  ContainerPost,
} from './styles';

import BolaLoad from '../../../bola-load.json';
import Favorite from '../../../favorite.json';

function Feed({ profile, navigation }) {
  const [loading, Setloading] = useState(false);
  const [loadingpost, Setloadingpost] = useState(false);
  const [feed, Setfeed] = useState([]);
  const [page, Setpage] = useState(1);
  const [total, Settotal] = useState(0);
  const [refreshing, Setrefreshing] = useState(false);

  const [impala, Setimpala] = useState('');

  const [isModalVisible, setisModalVisible] = useState(false);

  const [animacao, Setanimacao] = useState(false);

  const [teste, Setteste] = useState(false);

  function checkProfile() {
    if (profile.name === profile.email) {
      Alert.alert(
        'Complete seu perfil',
        'Parece que você ainda não completou seu perfil. É rapidinho (;',
        [
          {
            text: 'Completar meu perfil',
            onPress: () => navigation.navigate('Profile'),
          },
        ],
        { cancelable: false }
      );
    }
  }

  async function loadFeed(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return;

    Setloading(true);

    const responseFeed = await api.get(
      `buddypress/v1/activity?type=activity_update&page=${pageNumber}&per_page=10&_embed`
    );

    const totalItems = responseFeed.headers['x-wp-totalpages'];

    Settotal(totalItems);

    const data = responseFeed.data.map(posts => ({
      ...posts,
      dateFormatted: format(parseJSON(posts.date), "dd 'de' MMMM 'de' yyyy' ", {
        locale: pt,
      }),
    }));

    Setfeed(shouldRefresh ? data : [...feed, ...data]);
    Setpage(pageNumber + 1);
    Setloading(false);
  }

  useEffect(() => {
    checkProfile();
    loadFeed();
  }, []);

  async function refreshList() {
    Setrefreshing(true);

    await loadFeed(1, true);

    Setrefreshing(false);
  }

  async function favoritePost(idPost) {
    await api.post(`/buddypress/v1/activity/${idPost}/favorite`);
    Setrefreshing(true);
    await loadFeed(1, true);
    Setrefreshing(false);
  }

  async function newPost() {
    Setloadingpost(true);
    try {
      await api.post('buddypress/v1/activity', {
        type: 'activity_update',
        content: impala,
      });
      Setrefreshing(true);
      await loadFeed(1, true);
      Setrefreshing(false);
    } catch (err) {
      Alert.alert(
        'Falha na autenticação',
        'Houve um erro no login, verifique seus dados'
      );
    }
    Setloadingpost(false);
    Setimpala('');
    setisModalVisible(false);
  }

  toggleModalOpen = () => {
    setisModalVisible(true);
  };

  toggleModal = () => {
    setisModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fc1936' }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Feed</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        {loading ? (
          <View style={{ alignItems: 'flex-end' }}>
            <NewPostBtnInative>
              <NewsPostText>Novo post</NewsPostText>
              <Icon name="plus-circle" size={20} color="#fff" />
            </NewPostBtnInative>
          </View>
        ) : (
          <View style={{ alignItems: 'flex-end' }}>
            <NewPostBtn onPress={() => toggleModalOpen()}>
              <NewsPostText>Novo post</NewsPostText>
              <Icon name="plus-circle" size={20} color="#fff" />
            </NewPostBtn>
          </View>
        )}
        <FlatList
          style={{ marginBottom: 40 }}
          data={feed}
          keyExtractor={post => String(post.id)}
          onEndReached={() => loadFeed()}
          onEndReachedThreshold={0.1}
          onRefresh={refreshList}
          refreshing={refreshing}
          ListFooterComponent={
            loading && (
              <Loadcontent>
                <Lottie
                  resizeMode="contain"
                  autoSize
                  source={BolaLoad}
                  autoPlay
                  loop={true}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                />
                <LoadcontentText>Carregando...</LoadcontentText>
              </Loadcontent>
            )
          }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <FeedItem key={item.id}>
              <FeedHeader>
                <FeedAvatar source={{ uri: item.user_avatar.thumb }} />

                <HTMLView
                  style={{ flex: 1, marginLeft: 10 }}
                  value={`<span>${item.title}</span>`}
                  stylesheet={stylesDesc}
                />
                <FeedData>{item.dateFormatted}</FeedData>
              </FeedHeader>
              <View style={{ marginLeft: 20, marginBottom: 5, marginTop: 20 }}>
                <HTML
                  tagsStyles={{
                    p: {
                      fontFamily: 'SF Pro Text',
                      fontWeight: 'normal',
                      fontSize: 14,
                      color: '#171717',
                    },
                  }}
                  html={item.content.rendered}
                />
              </View>
              <FeedIcons>
                {item.favorited ? (
                  <Lottie
                    resizeMode="contain"
                    source={Favorite}
                    autoPlay
                    loop={false}
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  />
                ) : (
                  <TouchableOpacity onPress={() => favoritePost(item.id)}>
                    <Lottie
                      resizeMode="contain"
                      source={Favorite}
                      loop={false}
                      autoPlay={false}
                      style={{
                        width: 40,
                        height: 40,
                      }}
                    />
                  </TouchableOpacity>
                )}
              </FeedIcons>
            </FeedItem>
          )}
        />
      </Container>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => toggleModal()}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
      >
        <ContainerPost>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 20,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}
          >
            {loadingpost ? (
              <Loadcontent>
                <Lottie
                  resizeMode="contain"
                  autoSize
                  source={BolaLoad}
                  autoPlay
                  loop={true}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                />
                <LoadcontentText>Publicando...</LoadcontentText>
              </Loadcontent>
            ) : (
              <>
                <TextInput
                  placeholder="O que está pensando?"
                  onChangeText={Setimpala}
                  value={impala}
                  style={{
                    backgroundColor: '#eee',
                    height: 100,
                    justifyContent: 'flex-start',
                    borderRadius: 12,
                    padding: 10,
                  }}
                  numberOfLines={5}
                  multiline={true}
                />
                <NewPostBtnSubmit onPress={() => newPost()}>
                  <NewPostBtnSubmitText>Publicar</NewPostBtnSubmitText>
                </NewPostBtnSubmit>
              </>
            )}
          </View>
        </ContainerPost>
      </Modal>
    </SafeAreaView>
  );
}

Feed.navigationOptions = {
  title: 'Feed',
  tabBarIcon: ({ tintColor }) => (
    <View style={{ marginBottom: 13 }}>
      <Svg width="30" height="30" viewBox="0 0 48 48">
        <Path
          fill={tintColor}
          fillRule="evenodd"
          d="M27 12s-.488 6.857-3.345 9c0 0 1.345-13-2.508-17 0 0 0 7.857-3.571 14.286-1.675 3.013-3.572 5.998-3.572 10C14.004 34 20.94 36 24.01 36c3.595 0 9.99-2 9.99-9 0-4.317-7-15-7-15z"
          clipRule="evenodd"
        ></Path>
        <Path
          fill={tintColor}
          d="M16 41a1 1 0 011-1h14a1 1 0 011 1v5H16v-5z"
          opacity="0.3"
        ></Path>
      </Svg>
    </View>
  ),
};

const stylesDesc = StyleSheet.create({
  p: {
    margin: 20,
    fontFamily: 'SF Pro Text',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 13,
    color: '#000000',
  },
  span: {
    fontSize: 1,
    color: '#eee',
  },
  a: {
    margin: 20,
    fontFamily: 'SF Pro Text',
    fontWeight: 'bold',
    fontSize: 12,

    color: '#666',
  },
});

const mapStateToProps = state => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(Feed);
