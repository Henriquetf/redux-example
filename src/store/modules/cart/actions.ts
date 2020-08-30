import { Product } from './types';

export function addProductToCartRequest(product: Product) {
  return {
    type: '@cart/ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product,
    },
  } as const;
}

export function addProductToCartSuccess(product: Product) {
  return {
    type: '@cart/ADD_PRODUCT_TO_CART_SUCCESS',
    payload: {
      product,
    },
  } as const;
}

export function addProductToCartFailure(productId: number) {
  return {
    type: '@cart/ADD_PRODUCT_TO_CART_FAILURE',
    payload: {
      productId,
    },
  } as const;
}

export type AddProductToCartRequestAction = ReturnType<typeof addProductToCartRequest>;
export type AddProductToCartSuccessAction = ReturnType<typeof addProductToCartSuccess>;
export type AddProductToCartFailureAction = ReturnType<typeof addProductToCartFailure>;

export type CartActions =
  AddProductToCartRequestAction |
  AddProductToCartSuccessAction |
  AddProductToCartFailureAction;
