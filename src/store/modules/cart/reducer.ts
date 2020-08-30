import { Reducer } from 'redux';
import { produce } from 'immer';

import { CartState } from './types';

const initialState: CartState = {
  items: [],
};

const cart: Reducer<CartState> = (state = initialState, action) => produce(state, ((draft) => {
  switch (action.type) {
    case '@cart/ADD_PRODUCT_TO_CART': {
      const { product } = action.payload;

      const productInCartIndex = draft.items.findIndex(
        (item) => item.product.id === product.id,
      );

      if (productInCartIndex > -1) {
        draft.items[productInCartIndex].quantity += 1;
      } else {
        draft.items.push({
          product,
          quantity: 1,
        });
      }

      break;
    }
  }
}));

export default cart;
