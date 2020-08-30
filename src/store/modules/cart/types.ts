export enum CartActionTypes {
  addProductToCartRequest = '@cart/ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess = '@cart/ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = '@cart/ADD_PRODUCT_TO_CART_FAILURE',
}

export interface Product {
  id: number;
  title: string;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  outOfStockProducts: number[];
}

export interface ProductStock {
  id: number;
  quantity: number;
}
