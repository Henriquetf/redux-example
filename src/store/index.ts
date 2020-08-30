import { createStore } from 'redux';

import { enhancer, postCreateStore } from './enhancer';

import rootReducer from './modules/rootReducer';

const store = createStore(
  rootReducer,
  enhancer,
);

postCreateStore();

export default store;
