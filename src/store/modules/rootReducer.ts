import { combineReducers } from 'redux';

import cart from './cart/reducer';
import { CartState } from './cart/types';

export interface State {
  cart: CartState;
}

const rootReducer = combineReducers<State>({
  cart,
});

export default rootReducer;
