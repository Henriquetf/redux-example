import { Reducer } from 'redux';

import { CartState } from './types';

const initialState: CartState = {
  items: [],
};

const cart: Reducer<CartState> = (state = initialState, action) => {
  switch (action.type) {
    case '@cart/ADD_PRODUCT_TO_CART': {
      const { product } = action.payload;
      const productExists = state.items.find((i) => i.product.id === product.id);

      if (productExists) {
        return {
          ...state,
          items: state.items.map((item) => {
            if (item.product.id === product.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }

            return item;
          }),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quantity: 1,
          },
        ],
      };
    }

    default: {
      return state;
    }
  }
};

export default cart;
