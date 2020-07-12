import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, GenreLabel } from './styles';

import MovieItem from '~/components/MovieItem';
import Loader from '~/components/Loader';

import { StatusBar, FlatList } from 'react-native';

export default function Discover({ navigation }) {
  const dispatch = useDispatch();

  const { genres, genrersLoader } = useSelector((state) => state.discover);

  const [genreOffset, setGenreOffset] = useState(3);

  useEffect(() => {
    dispatch({ type: 'GET_GENRES' });
  }, [dispatch]);

  function loadGenres() {
    if (genreOffset === genres.length) {
      return;
    }
    setGenreOffset(genreOffset + 2);
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        {genrersLoader ? (
          <>
            <Loader />
          </>
        ) : (
          <FlatList
            data={genres.slice(0, 3)}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            onEndReached={() => loadGenres()}
            onEndReachedThreshold={0.1}
            //ListFooterComponent={moviesLoader && <Loader />}
            horizontal={false}
            renderItem={({ item }) => (
              <>
                <GenreLabel key={item.id}>{item.name}</GenreLabel>
                <MovieItem
                  key={item.id}
                  movieGenrer={item.id}
                  navigation={navigation}
                />
              </>
            )}
          />
        )}
      </Container>
    </>
  );
}

Discover.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="th-list" size={20} color={tintColor} />
  ),
};
