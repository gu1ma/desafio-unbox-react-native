import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import Loader from '~/components/Loader';

import {
  Container,
  InfoContainer,
  HeaderBackgroundImage,
  MovieInfos,
  Title,
  Description,
  ScrollContainer,
  HeaderForegroundImage,
  HeaderContainer,
} from './styles';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function MovieDetails({ navigation }) {
  const movieId = navigation.getParam('movieId');
  const [movie, setMovie] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(true);

  async function getMovieData() {
    try {
      setLoadingStatus(true);
      const { data } = await api.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=dcabe3d98146057d837088eb8533a2cb`,
      );
      setMovie(data);
      setLoadingStatus(false);
    } catch (e) {
      console.tron.log('e', e.message);
    }
  }

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <ScrollContainer contentContainerStyle={{ flexGrow: 1 }}>
      {loadingStatus ? (
        <Loader />
      ) : (
        <Container>
          <HeaderContainer>
            <HeaderBackgroundImage
              source={{
                uri: `http://image.tmdb.org/t/p/w185${movie.backdrop_path}`,
              }}
              blurRadius={2}
            />
            <HeaderForegroundImage
              source={{
                uri: `http://image.tmdb.org/t/p/w185${movie.poster_path}`,
              }}
            />
          </HeaderContainer>
          <InfoContainer>
            <Title>{movie.title}</Title>
            {/* <MovieInfos>
            Vote average: {movie.vote_average} | Realease:{' '}
            {format(parseISO(movie.release_date), "MMMM 'of' yyyy")}
          </MovieInfos>
          <Description>{movie.overview}</Description> */}
          </InfoContainer>
        </Container>
      )}
    </ScrollContainer>
  );
}

MovieDetails.navigationOptions = ({ navigation }) => ({
  //title: navigation.getParam('movie').title,
  //title: '',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
