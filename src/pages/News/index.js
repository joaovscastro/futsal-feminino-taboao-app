import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

import {
  Header,
  HeaderTexts,
  HeaderTextName,
  Container,
  Noticias,
  NoticiasImg,
  NoticiasTitle,
} from './styles';

import LoadNews from '../../components/LoadNews';

import api from '../../services/api';

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
      `wp/v2/posts?categories=1&page=${pageNumber}`
    );
    const totalItems = responseNoticias.headers['x-wp-totalpages'];

    Settotal(Math.floor(totalItems / 10));

    Setnoticias(
      shouldRefresh
        ? responseNoticias.data
        : [...noticias, ...responseNoticias.data]
    );
    Setpage(pageNumber + 1);
    Setloading(false);
  }

  useEffect(() => {
    loadNoticias();
  }, []);

  handleNavigate = noticiasingle => {
    navigation.navigate('NewsSingle', { noticiasingle });
  };

  async function refreshList() {
    Setrefreshing(true);

    await loadNoticias(1, true);

    Setrefreshing(false);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
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
          ListFooterComponent={loading && <ActivityIndicator />}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Noticias
              underlayColor="#ffffff"
              onPress={() => handleNavigate(item)}
            >
              <NoticiasImg source={{ uri: item.jetpack_featured_media_url }} />
              <View style={{ flex: 1 }}>
                <NoticiasTitle>{item.title.rendered}</NoticiasTitle>
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
