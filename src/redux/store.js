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
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import gameReducer from './reducers/gameReducer';

const persistConfig = {
    key: 'chess',
    storage,
    whitelist: ['user'],
}

const reducers = combineReducers({
    user: userReducer,
    game: gameReducer
});


const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({reducer: persistedReducer, middleware: [thunk]});
export const persistor = persistStore(store);

