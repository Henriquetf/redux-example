import { Product } from './types';

export function addProductToCart(product: Product) {
  return {
    type: '@cart/ADD_PRODUCT_TO_CART',
    payload: {
      product,
    },
  };
}
