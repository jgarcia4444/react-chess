import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore
} from 'redux-persist';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'chess',
    storage,
    whitelist: ['user'],
}

const reducers = combineReducers({
    user: userReducer
});


const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({reducer: persistedReducer, middleware: [thunk]});
export const persistor = persistStore(store);

