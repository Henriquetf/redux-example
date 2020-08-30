import { CartActionTypes, Product } from './types';

export function addProductToCartRequest(product: Product) {
  return {
    type: CartActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  } as const;
}

export function addProductToCartSuccess(product: Product) {
  return {
    type: CartActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  } as const;
}

export function addProductToCartFailure(productId: number) {
  return {
    type: CartActionTypes.addProductToCartFailure,
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
