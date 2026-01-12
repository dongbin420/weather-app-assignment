import type { OneCallResponse, WeatherUiModel } from './types';

export const mapToWeatherUiModel = (placeLabel: string, rawData: OneCallResponse, hourlyCount = 24): WeatherUiModel => {
  const today = rawData.daily?.[0];

  if (!today) {
    throw new Error('OneCall response missing daily[0].');
  }

  return {
    placeLabel,
    currentTemp: rawData.current.temp,
    todayMin: today.temp.min,
    todayMax: today.temp.max,
    hourly: (rawData.hourly ?? []).slice(0, hourlyCount).map((h) => ({
      dt: h.dt,
      temp: h.temp,
    })),
    timezone: rawData.timezone,
    timezoneOffset: rawData.timezone_offset,
  };
};
