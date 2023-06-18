import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../utils/axiosApi';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('fetch/Users', async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
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
