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
import { idToLabel } from '@/shared/lib/place/idToLabel';
import { useFavoritesStore } from '@/features/favorite/model/store';

export function PlacePage() {
  const { id: placeId } = useParams<{ id: string }>();
  const rawPlaceId = placeId ? decodeURIComponent(placeId) : '';
  const baseLabel = rawPlaceId ? idToLabel(rawPlaceId) : '';
  const alias = useFavoritesStore((s) => s.aliasesById?.[rawPlaceId]);

  const coordQuery = useLabelToCoordQuery(baseLabel);
  const coords = coordQuery.data ? pickFirstCoords(coordQuery.data) : undefined;
  const lat = coords?.lat ? coords.lat : Number.NaN;
  const lon = coords?.lon ? coords.lon : Number.NaN;
  const oneCall = useOneCallQuery({ lat, lon });

  const weatherUi = useMemo(() => {
    if (!hasMinimumWeatherData(oneCall.data)) return undefined;
    return mapToWeatherUiModel(baseLabel, oneCall.data, HOURLY_COUNT, alias);
  }, [oneCall.data, baseLabel, alias]);

  const theme = weatherUi?.currentWeather ? getWeatherTheme(weatherUi.currentWeather.id) : 'winter';

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
      {weatherUi ? <WeatherDetailView weatherUi={weatherUi} placeId={rawPlaceId} /> : <WeatherEmptyState />}
    </WeatherLayout>
  );
}
