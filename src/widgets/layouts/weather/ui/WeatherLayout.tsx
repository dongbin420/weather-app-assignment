import type { PropsWithChildren } from 'react';
import type { WeatherTheme } from '@/entities/weather/lib/getWeatherTheme';
import WeatherHeader from '@/widgets/headers/weather/ui/WeatherHeader';
import { themeBackground } from '../lib/themeBackground';

type Props = PropsWithChildren<{
  theme: WeatherTheme;
}>;

function WeatherLayout({ theme, children }: Props) {
  const bgUrl = themeBackground[theme];

  return (
    <div className="min-h-dvh bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: `url(${bgUrl})` }}>
      <WeatherHeader />
      <main>{children}</main>
    </div>
  );
}

export default WeatherLayout;
