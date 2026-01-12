import type { WeatherUiModel } from '@/entities/weather/model/types';

interface WeatherDetailViewProps {
  weatherUi: WeatherUiModel;
}

function WeatherDetailView({ weatherUi }: WeatherDetailViewProps) {
  return (
    <div className="mx-auto max-w-xl p-4">
      <header className="flex items-center justify-between gap-3">
        <h1 className="text-xl font-semibold">{weatherUi.placeLabel}</h1>
      </header>

      <section className="mt-4 rounded-xl border p-4">
        <div className="text-4xl font-bold">{weatherUi.currentTemp}°</div>
        <div className="mt-2 text-sm">
          최저/최고: {weatherUi.todayMin}° / {weatherUi.todayMax}°
        </div>
      </section>

      <section className="mt-4">
        <h2 className="text-sm font-medium">시간대별</h2>
        <ul className="mt-2 grid grid-cols-3 gap-2">
          {weatherUi.hourly.map((h, idx) => (
            <li key={h.dt} className="rounded-lg border p-2 text-center">
              <div className="text-xs">{idx === 0 ? '지금' : h.timeLabel}</div>
              <div className="text-base font-semibold">{h.temp}°</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default WeatherDetailView;
