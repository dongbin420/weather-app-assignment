import { useMemo } from 'react';
import { useOneCallQuery } from '@/entities/weather/api/useOneCallQuery';
import { mapToWeatherUiModel } from '@/entities/weather/model/mapToWeatherUiModel';
import { hasMinimumWeatherData } from '@/entities/weather/model/hasMinimumWeatherData';
import { useCurrentCoords } from '@/shared/lib/geolocation/useCurrentCoords';
import { useCoordToLabelQuery } from '@/entities/place/api/useCoordToLabelQuery';
import { pickPlaceLabel } from '@/entities/place/model/pickPlaceLabel';
import { getWeatherTheme } from '@/entities/weather/lib/getWeatherTheme';
import WeatherDetailView from '@/widgets/weather-detail/ui/WeatherDetailView';
import WeatherLayout from '@/widgets/layouts/weather/ui/WeatherLayout';
import WeatherEmptyState from '@/widgets/weather-empty/ui/WeatherEmptyState';
import StatusMessage from '@/widgets/status/ui/StatusMessage';
import { HOURLY_COUNT } from '@/shared/constants/constants';

export function HomePage() {
  const loc = useCurrentCoords();
  const lat = loc.status === 'success' ? loc.coords!.lat : Number.NaN;
  const lon = loc.status === 'success' ? loc.coords!.lon : Number.NaN;

  const oneCall = useOneCallQuery({ lat, lon });
  const labelQuery = useCoordToLabelQuery({ lat, lon });
  const placeLabel = labelQuery.data ? pickPlaceLabel(labelQuery.data) : '현재 위치';

  const weatherUi = useMemo(() => {
    if (!hasMinimumWeatherData(oneCall.data)) return undefined;
    return mapToWeatherUiModel(placeLabel, oneCall.data, HOURLY_COUNT);
  }, [oneCall.data, placeLabel]);

  const theme = weatherUi?.currentWeather ? getWeatherTheme(weatherUi.currentWeather.id) : 'winter';

  if (loc.isLoading)
    return (
      <StatusMessage>
        <div role="status" aria-label="loading">
          <div className="h-16 w-16 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700" />
        </div>
      </StatusMessage>
    );

  if (loc.isDenied) return <StatusMessage>{loc.message}</StatusMessage>;

  if (loc.isError) {
    return (
      <StatusMessage>
        <div className="flex flex-col items-center gap-3">
          <p>{loc.message}</p>
          <button className="rounded-md border border-slate-300 px-3 py-1 text-sm text-slate-700" onClick={loc.request}>
            다시 시도
          </button>
        </div>
      </StatusMessage>
    );
  }

  if (oneCall.isLoading)
    return (
      <StatusMessage>
        <div role="status" aria-label="loading">
          <div className="h-16 w-16 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700" />
        </div>
      </StatusMessage>
    );

  if (oneCall.error) return <StatusMessage>날씨 에러: {oneCall.error.message}</StatusMessage>;

  return (
    <WeatherLayout theme={theme}>
      {weatherUi ? <WeatherDetailView weatherUi={weatherUi} contextLabel="현재 위치" /> : <WeatherEmptyState />}
    </WeatherLayout>
  );
}
