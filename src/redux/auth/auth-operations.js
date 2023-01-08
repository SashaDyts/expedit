import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/auth';

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      const { status } = response;
      const error = {
        status,
        message: 'Email or password is incorrect',
      };

      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    console.log(token);

    if (token === null) {
      return thunkAPI.rejectWithValue(5);
    }

    try {
      const response = await api.getCurrentUser(token);
      console.log(response);
      return response;
    } catch (error) {}
  }
);
