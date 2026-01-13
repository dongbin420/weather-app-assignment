import type { WeatherUiModel } from '@/entities/weather/model/types';
import CurrentWeatherPanel from './CurrentWeatherPanel';
import HourlyForecastPanel from './HourlyForecastPanel';

interface WeatherDetailViewProps {
  weatherUi: WeatherUiModel;
}

function WeatherDetailView({ weatherUi }: WeatherDetailViewProps) {
  return (
    <div className="mx-auto w-full max-w-275 px-6 pb-16 pt-2 md:px-10">
      <div className="relative overflow-hidden rounded-3xl border border-white/15">
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
        <div className="relative bg-white/8 p-6 backdrop-blur-sm md:p-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <CurrentWeatherPanel weatherUi={weatherUi} />
            <HourlyForecastPanel hourly={weatherUi.hourly} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetailView;
