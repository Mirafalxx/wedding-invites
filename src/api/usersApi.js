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

export const createUser = async (data) => {
  try {
    await axiosApi.post('/users/create', data);
  } catch (error) {
    console.log(error);
  }
};
