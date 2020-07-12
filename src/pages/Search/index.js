import React, { useState, useEffect, useCallback } from 'react';

import { StatusBar, FlatList, TouchableOpacity } from 'react-native';

import api from '~/services/api';

import {
  Container,
  Form,
  SearchInput,
  MovieContainer,
  MovieImage,
  MovieText,
  MovieTextContainer,
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);

  const searchMovies = useCallback(() => {
    if (searchValue.lenght === 0) {
      return;
    }
    const result = api.get(
      `search/movie?api_key=dcabe3d98146057d837088eb8533a2cb&page=${page}&query=${searchValue}`,
    );

    result.then(
      (reponse) => {
        console.log('resp', reponse);
        setSearchResult(reponse.data.results);
      },
      (err) => {
        console.log('err', err);
      },
    );
  }, [page, searchValue]);

  useEffect(
    (value) => {
      searchMovies(value);
      setSearchResult(value);
      if (!value) {
        setSearchResult([]);
      }
    },
    [searchValue, searchMovies],
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
        <FlatList
          data={searchResult}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          //onEndReached={() => loadGenres()}
          onEndReachedThreshold={0.1}
          //ListFooterComponent={moviesLoader && <Loader />}
          horizontal={false}
          renderItem={({ item }) => (
            <TouchableOpacity>
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
      </Container>
    </>
  );
}

Search.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={20} color={tintColor} />
  ),
};
