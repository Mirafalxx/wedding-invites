import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../utils/axiosApi';

export const fetchUsers = createAsyncThunk('fetch/Users', async () => {
  try {
    const response = await axiosApi.get('/users');
    return response.data?.data;
  } catch (error) {
    console.log(error);
  }
});

export const createUser = createAsyncThunk('post/uploadImages', async (data) => {
  try {
    await axiosApi.post('/users/create', data);
  } catch (error) {
    console.log(error);
  }
});

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
    const response = await axiosApi.get('/upload/images');
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});
