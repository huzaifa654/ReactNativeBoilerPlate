import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

import Reducer from './Reducer';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    
};

const persistedReducer = persistReducer(persistConfig, Reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
    
});

const persistor = persistStore(store);

export { store, persistor };