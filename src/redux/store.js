import { configureStore } from '@reduxjs/toolkit';

import shopsReducer from './shops/shops-slice';
import authReducer from './auth/auth-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    shops: shopsReducer,
  },
});

export default store;
