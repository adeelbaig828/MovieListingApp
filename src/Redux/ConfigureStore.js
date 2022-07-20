import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {persistReducer} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';
import reducers from './index';

const persistConfig = {
  key: '_Root_',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);
export {store, persistor};
