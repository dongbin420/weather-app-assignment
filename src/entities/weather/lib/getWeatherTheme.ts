export type WeatherTheme = 'thunder' | 'rain' | 'snow' | 'clear' | 'clouds' | 'etc' | 'winter';

export const getWeatherTheme = (id: number): WeatherTheme => {
  if (id >= 200 && id < 300) return 'thunder';
  if (id >= 300 && id < 600) return 'rain';
  if (id >= 600 && id < 700) return 'snow';
  if (id === 800) return 'clear';
  if (id > 800 && id < 900) return 'clouds';
  return 'etc';
};
