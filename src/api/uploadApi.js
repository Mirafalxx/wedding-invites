import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../utils/axiosApi';
import { showNotification } from '../components/notification/showNotification';
import { store } from '../index';
import fileDownload from 'js-file-download';

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

export const getImages = createAsyncThunk('get/getImages', async (page) => {
  try {
    const response = await axiosApi.get(`/files?page=${page}&limit=12`);
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

export const downloadImage = createAsyncThunk('get/downloadImage', async (setLoading) => {
  setLoading(true);
  try {
    const response = await axiosApi.get(`/download/files/all`, {
      responseType: 'blob',
    });
    fileDownload(response.data, 'results.zip');

    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
});
