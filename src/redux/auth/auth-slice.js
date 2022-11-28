import { createSlice } from '@reduxjs/toolkit';

import { login } from './auth-operations';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',

  initialState,

  extraReducers: builder => {
    builder.addCase(login.pending, store => {
      store.loading = true;
      store.error = null;
    });
    builder.addCase(login.fulfilled, (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    });
    builder.addCase(login.rejected, (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    });
  },
});

export default authSlice.reducer;
