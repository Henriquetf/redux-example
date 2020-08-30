import { Reducer } from 'redux';
import { produce } from 'immer';

import { CartState } from './types';
import { CartActions } from './actions';

const initialState: CartState = {
  items: [],
  outOfStockProducts: [],
};

const cart: Reducer<CartState, CartActions> = (state = initialState, action) =>
  produce(state, ((draft) => {
    switch (action.type) {
      case '@cart/ADD_PRODUCT_TO_CART_SUCCESS': {
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

      case '@cart/ADD_PRODUCT_TO_CART_FAILURE': {
        const { productId } = action.payload;

        if (!draft.outOfStockProducts.includes(productId)) {
          draft.outOfStockProducts.push(productId);
        }

        break;
      }
    }
  }));

export default cart;
