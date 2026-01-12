import type { WeatherTheme } from '@/entities/weather/lib/getWeatherTheme';

import thunder from '../assets/thunder.webp';
import rain from '../assets/rain.webp';
import snow from '../assets/snow.webp';
import clear from '../assets/clear.webp';
import clouds from '../assets/cloud.webp';

export const themeBackground: Record<WeatherTheme, string> = {
  thunder,
  rain,
  snow,
  clear,
  clouds,
  etc: clouds,
};
