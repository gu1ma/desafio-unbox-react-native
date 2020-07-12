import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, GenreLabel, GenreContainer } from './styles';

import MovieItem from '~/components/MovieItem';
import Loader from '~/components/Loader';

export default function Discover({ navigation }) {
  const dispatch = useDispatch();

  const { genres, genrersLoader } = useSelector((state) => state.discover);

  useEffect(() => {
    dispatch({ type: 'GET_GENRES' });
    dispatch({ type: 'GET_MOVIES' });
  }, [dispatch]);

  return (
    <Container>
      {genrersLoader ? (
        <>
          <Loader />
        </>
      ) : (
        <GenreContainer>
          {genres.map((genre) => (
            <>
              <GenreLabel key={genre.id}>{genre.name}</GenreLabel>
              <MovieItem
                key={genre.id}
                movieGenrer={genre.id}
                navigation={navigation}
              />
            </>
          ))}
        </GenreContainer>
      )}
    </Container>
  );
}

Discover.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={20} color={tintColor} />
  ),
};
