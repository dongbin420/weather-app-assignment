import WeatherLayout from '@/widgets/layouts/weather/ui/WeatherLayout';
import WeatherDetailView from '@/widgets/weather-detail/ui/WeatherDetailView';
import WeatherEmptyState from '@/widgets/weather-empty/ui/WeatherEmptyState';
import StatusMessage from '@/widgets/status/ui/StatusMessage';
import { useParams } from 'react-router';
import { useLabelToCoordQuery } from '@/entities/place/api/useLabelToCoordQuery';
import { mapToWeatherUiModel } from '@/entities/weather/model/mapToWeatherUiModel';
import { hasMinimumWeatherData } from '@/entities/weather/model/hasMinimumWeatherData';
import { useOneCallQuery } from '@/entities/weather/api/useOneCallQuery';
import { pickFirstCoords } from '@/entities/place/model/pickFirstCoords';
import { useMemo } from 'react';
import { HOURLY_COUNT } from '@/shared/constants/constants';
import { getWeatherTheme } from '@/entities/weather/lib/getWeatherTheme';

export function PlacePage() {
  const { id: placeId } = useParams<{ id: string }>();
  const raw = placeId ? decodeURIComponent(placeId) : '';
  const placeLabel = raw ? raw.split('-').join(' ').trim() : '';
  const coordQuery = useLabelToCoordQuery(placeLabel);
  const coords = coordQuery.data ? pickFirstCoords(coordQuery.data) : undefined;
  const lat = coords?.lat ? coords.lat : Number.NaN;
  const lon = coords?.lon ? coords.lon : Number.NaN;
  const oneCall = useOneCallQuery({ lat, lon });

  const weatherUi = useMemo(() => {
    if (!hasMinimumWeatherData(oneCall.data)) return undefined;
    return mapToWeatherUiModel(placeLabel, oneCall.data, HOURLY_COUNT);
  }, [oneCall.data, placeLabel]);

  const theme = weatherUi?.currentWeather ? getWeatherTheme(weatherUi.currentWeather.id) : 'clear';

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
      {weatherUi ? <WeatherDetailView weatherUi={weatherUi} /> : <WeatherEmptyState />}
    </WeatherLayout>
  );
}
