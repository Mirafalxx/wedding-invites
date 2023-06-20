import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../utils/axiosApi';
import { showNotification } from '../components/notification/showNotification';
import { store } from '../index';

export const uploadImages = createAsyncThunk('post/uploadImages', async (data) => {
  try {
    for (let i = 0; i < data.length; i++) {
      const file = data[i];
      const formData = new FormData();
      formData.append('file', file);
      await axiosApi.post('/files/store', formData);

      showNotification('success', 'Вы успешно загрузили фотографию', 'Загрузка');
    }
  } catch (error) {
    console.log(error);
  }
});

export const getImages = createAsyncThunk('get/getImages', async () => {
  try {
    const response = await axiosApi.get('/files');
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteImages = createAsyncThunk('get/deleteImages', async (id) => {
  try {
    await axiosApi.delete(`/files/${id}`);
    showNotification('success', 'Вы успешно удалили фотографию', 'Удаление');
    store.dispatch(getImages());
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
