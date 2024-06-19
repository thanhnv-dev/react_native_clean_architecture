import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authSlice from 'features/auth/presentation/redux-slice/auth.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import appSlice from './slice/app.slice';

const persistConfig = {
    storage: AsyncStorage,
    key: 'root',
};

const rootReducer = combineReducers({
    auth: authSlice,
    app: appSlice,
});

const persistedReducer = persistReducer(persistConfig, (state: any, action) => {
    return rootReducer(state, action);
});

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
