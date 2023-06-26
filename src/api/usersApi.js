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

export const getUser = createAsyncThunk('fetch/getUser', async (id) => {
  try {
    const response = await axiosApi.get(`/users/${id}`);
    return response.data?.data?.[0];
  } catch (error) {
    return {};
  }
});

export const createUser = createAsyncThunk('post/uploadImages', async (data) => {
  try {
    const res = await axiosApi.post('/users/create', data);
    showNotification('success', 'Вы успешно создали пользователя', 'Пользователь');
    return res.data;
  } catch (error) {
    if (error.response.data.errors[0].message === 'Seats already taken') {
      showNotification('error', 'Это место уже занято');
    }
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

export const updateUser = createAsyncThunk('put/updateUser', async (data) => {
  const newData = { ...data };

  delete newData.id;

  try {
    await axiosApi.put(`/users/${data.id}`, newData);
    showNotification('success', 'Изменение прошли успешно', 'Пользователь');
    return true;
  } catch (error) {
    return false;
  }
});
