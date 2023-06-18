import 'regenerator-runtime/runtime';
import { createSlice } from '@reduxjs/toolkit';
import { getImages, uploadImages } from '../api/usersApi';

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    images: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [uploadImages.pending]: (state) => {
      state.loading = true;
    },
    [uploadImages.fulfilled]: (state) => {
      state.loading = false;
    },
    [uploadImages.pending]: (state) => {
      state.loading = false;
    },
    [getImages.pending]: (state) => {
      state.loading = true;
    },
    [getImages.fulfilled]: (state, { payload }) => {
      state.images = payload;
      state.loading = false;
    },
    [getImages.pending]: (state) => {
      state.loading = false;
    },
  },
});

export default imagesSlice.reducer;
