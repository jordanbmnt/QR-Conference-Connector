import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'

export const setupUserInfoStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = configureStore({
  reducer: rootReducer
})