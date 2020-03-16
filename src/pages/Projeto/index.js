import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ImageBackground, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
import Lottie from 'lottie-react-native';

import api from '../../services/api';

import {
  BackButton,
  BackButtonContent,
  Container,
  Title,
  Loadcontent,
  LoadcontentText,
} from './styles';

import BolaLoad from '../../../bola-load.json';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

export default function Projeto({ navigation }) {
  // Estados
  const [comentarios, Setcomentarios] = useState([]);
  const [loading, Setloading] = useState(false);
  const [fundo, setFundo] = useState(
    'https://futsalfemininotaboao.com.br/oprojeto.png'
  );

  async function loadComents() {
    Setloading(true);
    const coments = await api.get('wp/v2/posts?categories=47');

    setFundo(coments.data[0].jetpack_featured_media_url);
    Setcomentarios(coments.data);

    Setloading(false);
  }

  useEffect(() => {
    loadComents();
  }, []);

  return (
    <>
      <ImageBackground
        source={{ uri: fundo }}
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
