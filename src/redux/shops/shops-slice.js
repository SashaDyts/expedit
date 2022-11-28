import { createSlice } from '@reduxjs/toolkit';

import { fetchShops, addShop } from './shops-operations';

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const shopsSlice = createSlice({
  name: 'shops',

  initialState,

  extraReducers: builder => {
    builder.addCase(fetchShops.pending, store => {
      store.loading = true;
      store.error = null;
    });
    builder.addCase(fetchShops.fulfilled, (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    });
    builder.addCase(fetchShops.rejected, (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    });

    builder.addCase(addShop.pending, store => {
      store.loading = true;
      store.error = null;
    });
    builder.addCase(addShop.fulfilled, (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    });
    builder.addCase(addShop.rejected, (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    });
  },
});

export default shopsSlice.reducer;
