import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use((config: any) => {

  config.headers = {
    ...config.headers,
    'Content-Type': 'application/json',
  };

  return config;
});

export default axiosInstance;
