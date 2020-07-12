import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import produce from 'immer';

import { uniqBy } from 'lodash';

const { Types, Creators } = createActions({
  getGenres: [],
  getGenresSuccess: ['genres'],
  getGenresError: ['error'],
  getMovies: ['page', 'genreId'],
  getMoviesSuccess: ['movies'],
  getMoviesError: ['error'],
});

export const DiscoverTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  genres: [],
  genrersLoader: false,
  movies: [],
  moviesLoader: false,
});

/* Reducers Handlers */
const getGenres = (state = INITIAL_STATE) =>
  produce(state, (draft) => {
    draft.genrersLoader = true;
  });

const getGenresSuccess = (state = INITIAL_STATE, { genres }) =>
  produce(state, (draft) => {
    draft.genres = genres;
    draft.genrersLoader = false;
    draft.error = false;
  });

const getGenresError = (state = INITIAL_STATE, { error }) =>
  produce(state, (draft) => {
    draft.genrersLoader = false;
    draft.error = true;
  });

const getMovies = (state = INITIAL_STATE) =>
  produce(state, (draft) => {
    draft.moviesLoader = true;
  });

const getMoviesSuccess = (state = INITIAL_STATE, { movies }) =>
  produce(state, (draft) => {
    draft.movies = uniqBy([...draft.movies, ...movies.results], 'id');
    draft.moviesLoader = false;
    draft.error = false;
  });

const getMoviesError = (state = INITIAL_STATE, { error }) =>
  produce(state, (draft) => {
    draft.moviesLoader = false;
    draft.error = true;
  });
/* Reducers */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_GENRES]: getGenres,
  [Types.GET_GENRES_SUCCESS]: getGenresSuccess,
  [Types.GET_GENRES_ERROR]: getGenresError,

  [Types.GET_MOVIES]: getMovies,
  [Types.GET_MOVIES_SUCCESS]: getMoviesSuccess,
  [Types.GET_MOVIES_ERROR]: getMoviesError,
});
