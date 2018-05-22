import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers/reducer';
import dataAddSaga from '../sagas/dataAdd';

console.log(dataAddSaga)

const sagaMiddleware = createSagaMiddleware();

const middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware));
console.log(middlewares)
const store = createStore(
  reducer,
  middlewares,
);

sagaMiddleware.run(dataAddSaga); //

export default store;
