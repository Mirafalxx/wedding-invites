import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../utils/axiosApi';
import { showNotification } from '../components/notification/showNotification';

export const fetchUsers = createAsyncThunk('fetch/Users', async () => {
  try {
    const response = await axiosApi.get('/users');
    return response.data.data;
  } catch (error) {
    return [];
  }
});

export const createUser = createAsyncThunk('post/uploadImages', async (data) => {
  try {
    await axiosApi.post('/users/create', data);
    showNotification('success', 'Вы успешно создали пользователя', 'Пользователь');
    return true;
  } catch (error) {
    return false;
  }
});


export const deleteUser = createAsyncThunk('post/deleteUser', async (data) => {
  try {
    await axiosApi.delete(`/users/${data}`, data);
    showNotification('success', 'Вы успешно удалили пользователя', 'Пользователь');
    return true;
  } catch (error) {
    return false;
  }
});
