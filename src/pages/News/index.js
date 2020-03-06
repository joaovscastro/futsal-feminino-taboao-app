import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import { format, parseJSON } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import {
  Header,
  HeaderTexts,
  HeaderTextName,
  Container,
  Noticias,
  NoticiasImg,
  NoticiasTitle,
  NewsDate,
  Loadcontent,
  LoadcontentText,
} from './styles';

import BolaLoad from '../../../bola-load.json';

import api from '../../services/api';
import Lottie from 'lottie-react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

export default function News({ navigation }) {
  const [loading, Setloading] = useState(false);
  const [noticias, Setnoticias] = useState([]);
  const [page, Setpage] = useState(1);
  const [total, Settotal] = useState(0);
  const [refreshing, Setrefreshing] = useState(false);

  async function loadNoticias(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return;

    Setloading(true);

    const responseNoticias = await api.get(
      `wp/v2/posts?categories=1&page=${pageNumber}&per_page=10`
    );

    const dataNews = responseNoticias.data.map(noticia => ({
      ...noticia,

      dateFormatted: format(
        utcToZonedTime(parseJSON(noticia.date)),
        "dd 'de' MMMM 'de' yyyy",
        { timeZone: 'America/Sao_Paulo', locale: pt }
      ),
    }));

    const totalItems = responseNoticias.headers['x-wp-totalpages'];

    Settotal(totalItems);

    Setnoticias(shouldRefresh ? dataNews : [...noticias, ...dataNews]);
    Setpage(pageNumber + 1);
    Setloading(false);
  }

  useEffect(() => {
    loadNoticias();
  }, []);

  handleNavigatenews = noticiasingle => {
    navigation.navigate('NewsSingle', { noticiasingle });
  };

  async function refreshList() {
    Setrefreshing(true);

    await loadNoticias(1, true);

    Setrefreshing(false);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fc1936' }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Notícias</HeaderTextName>
        </HeaderTexts>
      </Header>
      <Container>
        <FlatList
          data={noticias}
          keyExtractor={post => String(post.id)}
          onEndReached={() => loadNoticias()}
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
            <Noticias
              underlayColor="#ffffff"
              onPress={() => handleNavigatenews(item)}
            >
              <NoticiasImg source={{ uri: item.jetpack_featured_media_url }} />
              <View style={{ flex: 1 }}>
                <NoticiasTitle>{item.title.rendered}</NoticiasTitle>
                <NewsDate>{item.dateFormatted}</NewsDate>
              </View>
              <View>
                <Icon name="chevron-right" size={30} color="#C4C4C4" />
              </View>
            </Noticias>
          )}
        />
      </Container>
    </SafeAreaView>
  );
}
