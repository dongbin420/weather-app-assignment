import type { WeatherUiModel } from '@/entities/weather/model/types';
import { formatLocalTime, formatTemp } from '../lib/formatters';

interface CurrentWeatherPanelProps {
  weatherUi: WeatherUiModel;
  contextLabel?: string;
}

function CurrentWeatherPanel({ weatherUi, contextLabel }: CurrentWeatherPanelProps) {
  const currentIcon = weatherUi.currentWeather?.icon ?? null;
  const currentDesc = weatherUi.currentWeather?.description ?? '';
  const nowLabel = formatLocalTime(weatherUi.timezoneOffset);

  return (
    <section className="flex min-h-60 flex-1 flex-col justify-end gap-6">
      <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-emerald-300/80 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
        <span>현재 시각 {nowLabel}</span>
      </div>

      <div className="flex flex-wrap items-end gap-5">
        <div className="text-shadow-soft text-[88px] font-semibold leading-none tracking-tight md:text-[96px]">
          {formatTemp(weatherUi.currentTemp)}
        </div>
        {currentIcon ? (
          <img
            src={`https://openweathermap.org/img/wn/${currentIcon}@2x.png`}
            alt={currentDesc || '현재 날씨 아이콘'}
            className="h-20 w-20 drop-shadow-[0_10px_18px_rgba(0,0,0,0.45)]"
            draggable={false}
          />
        ) : null}
      </div>

      <div className="flex flex-col gap-1">
        {contextLabel ? (
          <span className="text-xs font-semibold tracking-wide text-emerald-300/80">{contextLabel}</span>
        ) : null}
        <h1 className="text-shadow-soft inline-flex items-center gap-2 text-3xl font-semibold tracking-tight md:text-4xl">
          {contextLabel ? (
            <svg className="h-5 w-5 text-white/85" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 11l18-9-9 18-2-7-7-2z" />
            </svg>
          ) : null}
          <span>{weatherUi.placeLabel}</span>
        </h1>
        <span className="text-sm text-white/70">오늘</span>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
        <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">
          최고 {formatTemp(weatherUi.todayMax)} · 최저 {formatTemp(weatherUi.todayMin)}
        </div>
        {currentDesc ? (
          <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">{currentDesc}</div>
        ) : null}
      </div>
    </section>
  );
}

export default CurrentWeatherPanel;
