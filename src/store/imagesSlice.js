import 'regenerator-runtime/runtime';
import { createSlice } from '@reduxjs/toolkit';
import { getImages, uploadImages } from '../api/uploadApi';

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    images: [],
    loading: false,
    disabled: false,
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
      if (payload.length) {
        const uniqueObjects = [];

        const processedIds = [];

        [...state.images, ...payload].forEach(function (obj) {
          if (!processedIds.includes(obj.id)) {
            processedIds.push(obj.id);
            uniqueObjects.push(obj);
          }
        });
        state.disabled = false;

        state.images = uniqueObjects;
      } else {
        state.disabled = true;
      }
      state.loading = false;
    },
    [getImages.pending]: (state) => {
      state.loading = false;
    },
  },
});

export default imagesSlice.reducer;
