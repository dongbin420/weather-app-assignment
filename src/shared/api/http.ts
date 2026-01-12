import axios from 'axios';

export const owmHttp = axios.create({
  baseURL: import.meta.env.VITE_OWM_BASE_URL,
  timeout: 10_000,
});

export const kakaoHttp = axios.create({
  baseURL: import.meta.env.VITE_KAKAO_BASE_URL,
  timeout: 10_000,
  headers: {
    Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_KEY}`,
  },
});
