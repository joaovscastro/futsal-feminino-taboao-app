import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(persistReducers(rootReducer), enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };