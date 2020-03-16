import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { format, parseJSON } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import HTML from 'react-native-render-html';
import Modal from 'react-native-modal';
import Lottie from 'lottie-react-native';

import api from '../../services/api';

import {
  BackButton,
  BackButtonContent,
  Container,
  Title,
  Data,
  TitleComent,
  Comentario,
  ComentarioCont,
  DataComent,
  ComentName,
  ComentCont,
  ComentAvatar,
  NewComentBtnSubmit,
  NewComentBtnSubmitText,
  ContainerComent,
  Loadcontent,
  LoadcontentText,
  ComentEmpty,
} from './styles';

import BolaLoad from '../../../bola-load.json';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

export default function NewsSingle({ navigation }) {
  // Estados
  const [comentarios, Setcomentarios] = useState([]);
  const [impala, Setimpala] = useState('');
  const [isModalVisible, setisModalVisible] = useState(false);
  const [loading, Setloading] = useState(false);
  const [loadingpost, Setloadingpost] = useState(false);

  // Buscar notícia props
  const noticiasingle = navigation.getParam('noticiasingle');
  const dataNoticias = format(
    utcToZonedTime(parseJSON(noticiasingle.date)),
    "dd 'de' MMMM 'de' yyyy'",
    { timeZone: 'America/Sao_Paulo', locale: pt }
  );

  async function loadComents() {
    Setloading(true);
    const coments = await api.get(`wp/v2/comments?post=${noticiasingle.id}`);

    const dataComents = coments.data.map(coment => ({
      ...coment,

      dateFormatted: format(
        utcToZonedTime(parseJSON(coment.date)),
        "dd'/'MM'/'yyyy'",
        { timeZone: 'America/Sao_Paulo', locale: pt }
      ),
    }));

    Setcomentarios(dataComents);
    Setloading(false);
  }

  useEffect(() => {
    loadComents();
  }, []);

  async function postComent() {
    Setloadingpost(true);
    try {
      await api.post('wp/v2/comments', {
        content: impala,
        post: noticiasingle.id,
      });
      loadComents();
      setisModalVisible(false);
    } catch (err) {
      Alert.alert('Ops..', 'Verifique se preencheu o campo de comentários.');
    }

    Setloadingpost(false);
  }

  toggleModalOpen = () => {
    setisModalVisible(true);
  };

  toggleModal = () => {
    setisModalVisible(false);
  };

  return (
    <>
      <ImageBackground
        source={{ uri: noticiasingle.jetpack_featured_media_url }}
        style={{
          width: null,
          height: 220,
          backgroundColor: '#f9f9f9',
        }}
      >
        <SafeAreaView>
          <BackButton
            underlayColor="#ffffff"
            onPress={() => navigation.goBack()}
          >
            <BackButtonContent>
              <Icon name="chevron-left" size={30} />
            </BackButtonContent>
          </BackButton>
        </SafeAreaView>
      </ImageBackground>
      <Container>
        <Title>{noticiasingle.title.rendered}</Title>
        <Data>{dataNoticias}</Data>
        <View style={{ marginTop: 20 }}>
          <HTML
            tagsStyles={{
              p: {
                fontFamily: 'SF Pro Text',
                fontWeight: 'normal',
                fontSize: 14,
                color: '#171717',
                lineHeight: 22,
                opacity: 0.8,
                marginRight: 20,
                marginLeft: 20,
              },
              h1: {
                margin: 20,
              },
              h2: {
                margin: 20,
              },
            }}
            imagesMaxWidth={Dimensions.get('window').width}
            imagesInitialDimensions={{
              width: Dimensions.get('window').width,
              height: 200,
            }}
            html={noticiasingle.content.rendered}
          />
        </View>
        <View
          style={{
            marginBottom: 50,
            marginTop: 30,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <TitleComent>Comentários</TitleComent>

          <View>
            {loading ? (
              <ActivityIndicator size={30} color="#fc1936" />
            ) : (
              <>
                {comentarios.length ? (
                  <>
                    {comentarios.map(comentario => (
                      <Comentario key={comentario.id}>
                        <ComentarioCont>
                          <ComentAvatar
                            source={{ uri: comentario.author_avatar_urls[48] }}
                          />
                          <ComentName>{comentario.author_name}</ComentName>
                          <DataComent>{comentario.dateFormatted}</DataComent>
                        </ComentarioCont>
                        <View style={{ marginLeft: 43, marginTop: 5 }}>
                          <HTML
                            tagsStyles={{
                              p: {
                                fontFamily: 'SF Pro Text',
                                fontWeight: 'normal',
                                color: '#171717',
                                fontSize: 12,
                              },
                            }}
                            html={comentario.content.rendered}
                          />
                        </View>
                      </Comentario>
                    ))}
                  </>
                ) : (
                  <ComentEmpty>
                    Nenhum comentário. Seja o primeiro a comentar!
                  </ComentEmpty>
                )}
                <View>
                  <NewComentBtnSubmit onPress={() => toggleModalOpen()}>
                    <NewComentBtnSubmitText>Comentar</NewComentBtnSubmitText>
                  </NewComentBtnSubmit>
                </View>
              </>
            )}
          </View>
        </View>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => toggleModal()}
          style={{
            justifyContent: 'flex-end',
            margin: 0,
          }}
        >
          <ContainerComent>
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
                  <LoadcontentText style={{ color: '#666', fontSize: 11 }}>
                    Publicando...
                  </LoadcontentText>
                </Loadcontent>
              ) : (
                <>
                  <TextInput
                    placeholder="Faça um comentário"
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
                  <NewComentBtnSubmit onPress={() => postComent()}>
                    <NewComentBtnSubmitText>Publicar</NewComentBtnSubmitText>
                  </NewComentBtnSubmit>
                </>
              )}
            </View>
          </ContainerComent>
        </Modal>
      </Container>
    </>
  );
}
