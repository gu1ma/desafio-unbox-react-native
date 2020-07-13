import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container, GenreLabel } from './styles';

import MovieItem from '~/components/MovieItem';
import Loader from '~/components/Loader';

import { StatusBar, FlatList } from 'react-native';

export default function Discover({ navigation }) {
  const dispatch = useDispatch();
  const { genres, genrersLoader } = useSelector((state) => state.discover);

  useEffect(() => {
    dispatch({ type: 'GET_GENRES' });
  }, [dispatch]);

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
            data={genres}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            onEndReachedThreshold={0.1}
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
