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

import {
  BackButton,
  BackButtonContent,
  Container,
  Title,
  Data,
  Content,
  Share,
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

import Brasao from '../../../assets/img/brasao.png';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

export default function Projeto() {
  // Estados
  const [comentarios, Setcomentarios] = useState([]);
  const [loading, Setloading] = useState(false);

  async function loadComents() {
    Setloading(true);
    const coments = await api.get('sportspress/v2/sponsors?_embed');

    Setcomentarios(coments.data);
    Setloading(false);
  }

  useEffect(() => {
    loadComents();
  }, []);

  return (
    <>
      <ImageBackground
        source={{
          uri:
            'https://i0.wp.com/futsalfemininotaboao.com.br/wp-content/uploads/2019/08/futsal_feminino_taboao-1.jpg?resize=300%2C300&ssl=1',
        }}
        style={{
          width: null,
          height: 220,
          backgroundColor: '#f9f9f9',
        }}
      >
        <SafeAreaView>
          <BackButton onPress={() => navigation.goBack()}>
            <BackButtonContent>
              <Icon name="chevron-left" size={30} />
            </BackButtonContent>
          </BackButton>
        </SafeAreaView>
      </ImageBackground>
      <Container>
        {loading ? (
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
        ) : (
          <>
            {comentarios.map(post => (
              <View key={post.id}>
                <Title>{post.title.rendered}</Title>

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
                        marginTop: 10,
                        marginBottom: 10,
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
                    html={post.content.rendered}
                  />
                </View>
              </View>
            ))}
          </>
        )}
      </Container>
    </>
  );
}
