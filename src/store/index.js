import { configureStore, combineReducers } from '@reduxjs/toolkit';

import productApi from '../api/productsApi';

const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productApi.middleware),
});

export default store;
