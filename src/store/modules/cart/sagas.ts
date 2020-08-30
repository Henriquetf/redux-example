import {
  all, call, takeLatest, select, put,
} from 'redux-saga/effects';

import { getProductStock } from '../../../services/api/stock';

import { State } from '../rootReducer';

import { addProductToCartFailure, AddProductToCartRequestAction, addProductToCartSuccess } from './actions';
import { ProductStock } from './types';

function* checkProductStock({ payload }: AddProductToCartRequestAction) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: State) => {
    return state.cart.items.find((item) => item.product.id === product.id)?.quantity ?? 0;
  });

  const availableStockResponse: ProductStock = yield call(getProductStock, product.id);

  if (availableStockResponse.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest('@cart/ADD_PRODUCT_TO_CART_REQUEST', checkProductStock),
]);
