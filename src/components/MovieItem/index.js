import React, { useMemo, useState, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Container, ContainerDescription, Image, Description } from './styles';

import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Loader from '~/components/Loader';

export default function MovieItem({ movieGenrer, navigation }) {
  const [page, setPage] = useState(1);
  const movies = useSelector((state) =>
    state.discover.movies.filter((movie) => {
      return movie.genre_ids.includes(movieGenrer);
    }),
  );

  const { moviesLoader } = useSelector((state) => state.discover);

  const dispatch = useDispatch();

  const getListMovies = useCallback(() => {
    dispatch({ type: 'GET_MOVIES', page, genreId: movieGenrer });
    setPage(page + 1);
  }, [page, dispatch, movieGenrer]);

  useMemo(() => {
    getListMovies();
  }, []);

  return (
    <FlatList
      data={movies}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      onEndReached={() => getListMovies()}
      onEndReachedThreshold={0.1}
      ListFooterComponent={moviesLoader && <Loader />}
      horizontal={true}
      renderItem={({ item }) => (
        <Container
          onPress={() => {
            navigation.navigate('MovieDetails', {
              movieId: item.id,
            });
          }}>
          <Image
            source={{
              uri: `http://image.tmdb.org/t/p/w185${item.poster_path}`,
            }}
          />
          <ContainerDescription>
            <Description>{item.title}</Description>
            <Icon name="info" size={12} color="#fff" />
          </ContainerDescription>
        </Container>
      )}
    />
  );
}
