import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

// app store
const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.REACT_APP_DEV_TOOLS == 1 ? true : false,
});

export default store;

