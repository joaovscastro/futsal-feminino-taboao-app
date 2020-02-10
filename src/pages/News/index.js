import React, { useState, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';

import {
  Header,
  HeaderTexts,
  HeaderTextName,
  HeaderTextDesc,
  SearchContent,
  SearchBtn,
  Container,
  Noticias,
  NoticiasImg,
  NoticiasTitle,
  NoticiasDesc,
} from './styles';

import LoadNews from '../../components/LoadNews';

import api from '../../services/api';

import fotoAvatar from '../../../assets/img/avatar.png';
import noticiaPlaceholder from '../../../assets/img/noticias-placeholder.jpg';
import Brasao from '../../../assets/img/brasao.png';

import Img1 from '../../../assets/img/img1.jpg';
import Img2 from '../../../assets/img/img2.jpg';
import Img3 from '../../../assets/img/img3.jpg';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

export default function News({ navigation }) {
  const [loading, Setloading] = useState(false);
  const [noticias, Setnoticias] = useState([]);

  async function loadNoticias() {
    Setloading(true);

    const responseNoticias = await api.get('wp/v2/posts?categories=1');
    Setnoticias(responseNoticias.data);

    Setloading(false);
  }

  useEffect(() => {
    loadNoticias();
  }, []);

  handleNavigate = noticiasingle => {
    navigation.navigate('NewsSingle', { noticiasingle });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Header>
        <HeaderTexts>
          <HeaderTextName>Notícias</HeaderTextName>
        </HeaderTexts>
        <SearchBtn>
          <SearchContent>
            <Icon name="search" size={20} color="#000000" />
          </SearchContent>
        </SearchBtn>
      </Header>
      <Container>
        {loading ? (
          <>
            <LoadNews />
            <LoadNews />
            <LoadNews />
          </>
        ) : (
          <>
            {noticias.map(noticia => (
              <Noticias
                key={noticia.id}
                underlayColor="#ffffff"
                onPress={() => handleNavigate(noticia)}
              >
                <NoticiasImg
                  source={{ uri: noticia.jetpack_featured_media_url }}
                />
                <View style={{ flex: 1 }}>
                  <NoticiasTitle>{noticia.title.rendered}</NoticiasTitle>
                  <NoticiasDesc>{noticia.excerpt.rendered}</NoticiasDesc>
                </View>
                <View>
                  <Icon name="chevron-right" size={30} color="#C4C4C4" />
                </View>
              </Noticias>
            ))}
          </>
        )}
      </Container>
    </SafeAreaView>
  );
}
