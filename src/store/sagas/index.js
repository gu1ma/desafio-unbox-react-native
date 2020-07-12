import { all, takeLatest, takeEvery } from 'redux-saga/effects';

import { DiscoverTypes } from '../ducks/discover';
import {
  getListGenresRequest,
  getListMoviesRequest,
} from '~/store/sagas/discover';

export default function* rootSaga() {
  yield all([
    /*
     * DISCOVER
     */
    takeLatest(DiscoverTypes.GET_GENRES, getListGenresRequest),
    takeEvery(DiscoverTypes.GET_MOVIES, getListMoviesRequest),
  ]);
}
