import React, { useState, useMemo, useCallback } from 'react';

import { StatusBar, FlatList, TouchableOpacity } from 'react-native';

import api from '~/services/api';

import Loader from '~/components/Loader';

import {
  Container,
  Form,
  SearchInput,
  MovieContainer,
  MovieImage,
  MovieText,
  MovieTextContainer,
} from './styles';

import { useNavigation } from '@react-navigation/native';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);

  const { navigate } = useNavigation();

  const searchMovies = useCallback(() => {
    if (searchValue.lenght === 0) {
      return;
    }
    const result = api.get(
      `search/movie?api_key=dcabe3d98146057d837088eb8533a2cb&page=${page}&query=${searchValue}`,
    );

    setLoader(true);
    result.then(
      (reponse) => {
        console.tron.log('resp', reponse);
        setSearchResult(reponse.data.results);
        setLoader(false);
      },
      (err) => {
        console.log('err', err);
        setLoader(false);
      },
    );
  }, [page, searchValue]);

  useMemo(
    (value) => {
      searchMovies(value);
      setSearchResult(value);
      if (!value) {
        setSearchResult([]);
      }
    },
    [searchMovies],
  );

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Form>
          <SearchInput
            autoCapitalize="none"
            autoCorrect
            placeholder="Search"
            onChangeText={setSearchValue}
            value={searchValue}
          />
        </Form>
        {loader ? (
          <Loader />
        ) : (
          <FlatList
            data={searchResult}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            onEndReachedThreshold={0.1}
            horizontal={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigate('MovieDetails', {
                    movieId: item.id,
                  });
                }}>
                <MovieContainer>
                  <MovieImage
                    source={{
                      uri: `http://image.tmdb.org/t/p/w185${item.poster_path}`,
                    }}
                  />
                  <MovieTextContainer>
                    <MovieText>{item.title}</MovieText>
                  </MovieTextContainer>
                </MovieContainer>
              </TouchableOpacity>
            )}
          />
        )}
      </Container>
    </>
  );
}
