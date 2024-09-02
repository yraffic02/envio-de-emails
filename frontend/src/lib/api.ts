import { getToken } from '@/utils/localStorage';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333', 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
