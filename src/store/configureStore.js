import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
