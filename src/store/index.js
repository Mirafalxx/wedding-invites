import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { createReducerManager } from './reducerManager';
import imagesSlice from './imagesSlice';
import usersReducer from './usersSlice';

export function createReduxStore(initialState, asyncReducers) {
  const rootReducers = {
    ...asyncReducers,
    users: usersReducer,
    images: imagesSlice,
  };

  const reducerManager = createReducerManager(rootReducers);

  const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  });

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: true,
    preloadedState: initialState,
    middleware,
  });

  store.reducerManager = reducerManager;

  return store;
}
