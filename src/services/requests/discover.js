import api from '~/services/api';

export const getListGenres = () =>
  api.get('genre/movie/list?api_key=dcabe3d98146057d837088eb8533a2cb');

export const getListMovies = (page = 1, genreId = undefined) => {
  let url =
    genreId === undefined
      ? `discover/movie?api_key=dcabe3d98146057d837088eb8533a2cb&page=${page}`
      : `discover/movie?api_key=dcabe3d98146057d837088eb8533a2cb&page=${page}&with_genres=${genreId}`;

  return api.get(url);
};
