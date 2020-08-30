/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSaga(): any {
  return yield all([
    cart,
  ]);
}
