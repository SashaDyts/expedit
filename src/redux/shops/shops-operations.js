import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'api/shops';

export const fetchShops = createAsyncThunk(
  'shops/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getShops();
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const addShop = createAsyncThunk(
  'shops/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addShop(data);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
