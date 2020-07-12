import { call, put } from 'redux-saga/effects';
import { getListGenres, getListMovies } from '~/services/requests/discover';
import RepositoriesActions from '~/store/ducks/discover';

export function* getListGenresRequest() {
  try {
    const response = yield call(getListGenres);

    yield put(RepositoriesActions.getGenresSuccess(response.data.genres));
  } catch (errorData) {
    yield put(RepositoriesActions.getGenresError(errorData));
  }
}

export function* getListMoviesRequest({ page, genreId }) {
  try {
    const response = yield call(getListMovies, page, genreId);

    yield put(RepositoriesActions.getMoviesSuccess(response.data));
  } catch (errorData) {
    yield put(RepositoriesActions.getMoviesError(errorData));
  }
}
