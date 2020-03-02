import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Alert,
} from 'react-native';
import { format, parseJSON } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import HTML from 'react-native-render-html';

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
} from './styles';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

export default function NewsSingle({ navigation }) {
  const noticiasingle = navigation.getParam('noticiasingle');
  const dataNoticias = format(
    utcToZonedTime(parseJSON(noticiasingle.date)),
    "dd 'de' MMMM 'de' yyyy'",
    { timeZone: 'America/Sao_Paulo', locale: pt }
  );

  const [comentarios, Setcomentarios] = useState([]);

  const [impala, Setimpala] = useState('');

  async function loadComents() {
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
  }

  useEffect(() => {
    loadComents();
  }, []);

  async function postComent() {
    try {
      await api.post('wp/v2/comments', {
        content: impala,
        post: noticiasingle.id,
      });
    } catch (err) {
      Alert.alert(
        'Falha na autenticação',
        'Houve um erro no login, verifique seus dados'
      );
    }
  }

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
          <BackButton onPress={() => navigation.goBack()}>
            <BackButtonContent>
              <Icon name="chevron-left" size={30} />
            </BackButtonContent>
          </BackButton>
        </SafeAreaView>
      </ImageBackground>
      <Container>
        <Title>{noticiasingle.title.rendered}</Title>
        <Data>{dataNoticias}</Data>

        <HTML
          tagsStyles={{
            p: {
              color: 'grey',
              lineHeight: 20,
            },
          }}
          imagesMaxWidth={Dimensions.get('window').width}
          html={noticiasingle.content.rendered}
        />
        <View style={{ marginBottom: 50 }}>
          <TitleComent>Comentários</TitleComent>

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
                  <HTML
                    tagsStyles={{
                      p: {
                        fontStyle: 'italic',
                        color: 'red',
                      },
                    }}
                    html={comentario.content.rendered}
                  />
                </Comentario>
              ))}
            </>
          ) : (
            <Text>Nenhum comentário</Text>
          )}
          <TouchableOpacity onPress={() => postComent()}>
            <Text>Comentar</Text>
          </TouchableOpacity>
          <Text>{impala}</Text>
          <TextInput
            placeholder="Comentario"
            onChangeText={Setimpala}
            value={impala}
            style={{ backgroundColor: '#666' }}
          />
        </View>
      </Container>
    </>
  );
}
