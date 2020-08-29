import { Reducer } from 'redux';

import { CartState } from './types';

const initialState: CartState = {
  items: [],
};

const cart: Reducer<CartState> = (state = initialState) => state;

export default cart;
