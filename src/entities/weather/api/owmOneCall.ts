import type { OneCallParams, OneCallResponse } from '../model/types';
import { owmHttp } from '../../../shared/api/http';

export const fetchOneCall = async (params: OneCallParams): Promise<OneCallResponse> => {
  const { lat, lon } = params;

  const res = await owmHttp.get<OneCallResponse>('/data/3.0/onecall', {
    params: {
      lat,
      lon,
      appid: import.meta.env.VITE_OWM_KEY,
      units: 'metric',
      lang: 'kr',
      exclude: 'minutely,alerts',
    },
  });

  return res.data;
};
