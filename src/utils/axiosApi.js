import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://192.168.180.28:8081',
});

export default axiosApi;
