import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://167.172.190.219:81',
});

export default axiosApi;
