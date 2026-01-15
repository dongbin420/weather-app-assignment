import type { WeatherTheme } from '@/entities/weather/lib/getWeatherTheme';

import thunder from '/thunder.webp';
import rain from '/rain.webp';
import snow from '/snow.webp';
import clear from '/clear.webp';
import clouds from '/cloud.webp';
import winter from '/winter.webp';

export const themeBackground: Record<WeatherTheme, string> = {
  thunder,
  rain,
  snow,
  clear,
  clouds,
  winter,
  etc: clouds,
};
