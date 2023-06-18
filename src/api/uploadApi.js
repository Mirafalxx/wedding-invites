import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../utils/axiosApi';
import axios from 'axios';

export const uploadImages = createAsyncThunk('post/uploadImages', async (data) => {
  try {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append('files[]', data[key]);
    });

    await axiosApi.post('/images', data);
  } catch (error) {
    console.log(error);
  }
});

export const getImages = createAsyncThunk('get/getImages', async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20');
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const downloadImages = createAsyncThunk('post/uploadImages', async (data) => {
  try {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append('files[]', data[key]);
    });

    await axiosApi.post('/images', data);
  } catch (error) {
    console.log(error);
  }
});
