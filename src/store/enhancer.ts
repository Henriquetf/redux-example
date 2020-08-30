import { applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

export const enhancer = composeWithDevTools(
  applyMiddleware(...middlewares),
);

export function postCreateStore(): void {
  sagaMiddleware.run(rootSaga);
}
