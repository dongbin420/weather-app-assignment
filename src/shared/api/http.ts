import axios from 'axios';

export const owmHttp = axios.create({
  baseURL: import.meta.env.VITE_OWM_BASE_URL,
  timeout: 10_000,
});
