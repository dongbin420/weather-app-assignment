import type { OneCallResponse, WeatherUiModel } from '@/entities/weather/model/types';
import { formatHour } from '@/shared/lib/time/formatHour';

export const mapToWeatherUiModel = (
  placeLabel: string,
  rawData: OneCallResponse,
  hourlyCount = 24,
  alias?: string,
): WeatherUiModel => {
  const today = rawData.daily?.[0];

  if (!today) {
    throw new Error('OneCall response missing daily[0].');
  }

  return {
    placeLabel,
    alias,
    currentTemp: rawData.current.temp,
    currentWeather: rawData.current.weather[0],
    todayMin: today.temp.min,
    todayMax: today.temp.max,
    hourly: (rawData.hourly ?? []).slice(0, hourlyCount).map((h) => ({
      dt: h.dt,
      temp: h.temp,
      timeLabel: formatHour(h.dt, rawData.timezone_offset),
      weather: h.weather[0],
    })),
    timezone: rawData.timezone,
    timezoneOffset: rawData.timezone_offset,
  };
};
