import React, { useState, useEffect, useMemo } from 'react';
import { ScrollView } from 'react-native';
import api from '~/services/api';

import { format } from 'date-fns';

import { useRoute } from '@react-navigation/native';

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
  GenresContainer,
  GenreBadge,
} from './styles';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function MovieDetails() {
  const route = useRoute();
  const { movieId } = route.params;
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

  const dateFormatted = useMemo(
    () => movie && format(new Date(movie.release_date), "MMMM 'of' yyyy"),
    [movie],
  );

  return (
    movieId && (
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
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <GenresContainer>
                  {movie.genres.map((genre) => (
                    <GenreBadge>{genre.name}</GenreBadge>
                  ))}
                </GenresContainer>
              </ScrollView>
              <Description>{movie.overview}</Description>
              <MovieInfos>
                {`Release: ${dateFormatted} | Vote average: ${movie.vote_average}`}
              </MovieInfos>
            </InfoContainer>
          </Container>
        )}
      </ScrollContainer>
    )
  );
}
