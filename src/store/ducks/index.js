import { combineReducers } from 'redux';

import { reducer as discover } from './discover';

const reducers = combineReducers({
  discover,
});

export default reducers;
