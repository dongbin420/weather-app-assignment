import type { WeatherUiModel } from '@/entities/weather/model/types';
import { formatTemp } from '../lib/formatters';
import { useDragScroll } from '../lib/useDragScroll';

interface HourlyForecastPanelProps {
  hourly: WeatherUiModel['hourly'];
}

function HourlyForecastPanel({ hourly }: HourlyForecastPanelProps) {
  const { listRef, dragHandlers } = useDragScroll<HTMLUListElement>();

  return (
    <section className="w-full lg:w-130">
      <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-shadow-soft text-sm font-semibold tracking-wide text-white/90">시간대별 날씨</h2>
          <span className="text-xs text-white/60">24시간</span>
        </div>

        <ul
          ref={listRef}
          className="scrollbar-hide mt-4 flex gap-3 overflow-x-auto pb-2 pr-4 text-center cursor-grab select-none active:cursor-grabbing"
          style={{ touchAction: 'none' }}
          {...dragHandlers}
        >
          {hourly.map((hour, idx) => (
            <li key={hour.dt}>
              <div className="flex w-19 flex-col items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-2 py-3 text-white/90 backdrop-blur">
                <span className="text-xs text-white/70">{idx === 0 ? '지금' : hour.timeLabel}</span>
                {hour.weather?.icon ? (
                  <img
                    src={`https://openweathermap.org/img/wn/${hour.weather.icon}@2x.png`}
                    alt="시간대별 날씨 아이콘"
                    className="h-10 w-10"
                    draggable={false}
                  />
                ) : (
                  <div className="h-10 w-10" />
                )}
                <span className="text-base font-semibold">{formatTemp(hour.temp)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HourlyForecastPanel;
