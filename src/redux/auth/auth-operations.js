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
