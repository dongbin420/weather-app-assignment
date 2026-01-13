import type { OneCallResponse } from '@/entities/weather/model/types';

export const hasMinimumWeatherData = (data?: OneCallResponse): data is OneCallResponse => {
  return Boolean(data?.current?.weather?.[0] && data?.daily?.[0]);
};
