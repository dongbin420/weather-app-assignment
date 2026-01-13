import { useMemo } from 'react';
import { useOneCallQuery } from '@/entities/weather/api/useOneCallQuery';
import { mapToWeatherUiModel } from '@/entities/weather/model/mapToWeatherUiModel';
import { useCurrentCoords } from '@/shared/lib/geolocation/useCurrentCoords';
import { useCoordToLabelQuery } from '@/entities/place/api/useCoordToLabelQuery';
import { pickPlaceLabel } from '@/entities/place/model/pickPlaceLabel';
import { getWeatherTheme } from '@/entities/weather/lib/getWeatherTheme';
import WeatherDetailView from '@/widgets/weather-detail/ui/WeatherDetailView';
import WeatherLayout from '@/widgets/layouts/weather/ui/WeatherLayout';

const HOURLY_COUNT = 24;

export function HomePage() {
  const loc = useCurrentCoords();
  const lat = loc.status === 'success' ? loc.coords!.lat : Number.NaN;
  const lon = loc.status === 'success' ? loc.coords!.lon : Number.NaN;

  const oneCall = useOneCallQuery({ lat, lon });
  const labelQuery = useCoordToLabelQuery({ lat, lon });
  const placeLabel = labelQuery.data ? pickPlaceLabel(labelQuery.data) : '현재 위치';

  const weatherUi = useMemo(() => {
    if (!oneCall.data) return undefined;
    return mapToWeatherUiModel(placeLabel, oneCall.data, HOURLY_COUNT);
  }, [oneCall.data, placeLabel]);

  if (loc.isLoading) return <div>{loc.message ?? '현재 위치 확인 중...'}</div>;

  if (loc.isDenied) {
    return (
      <div>
        <p>{loc.message}</p>
      </div>
    );
  }

  if (loc.isError) {
    return (
      <div>
        <p>{loc.message}</p>
        <button onClick={loc.request}>다시 시도</button>
      </div>
    );
  }

  if (oneCall.isLoading) return <div>날씨 불러오는 중...</div>;
  if (oneCall.error) return <div>날씨 에러: {oneCall.error.message}</div>;
  if (!weatherUi) return null;

  const theme = weatherUi.currentWeather ? getWeatherTheme(weatherUi.currentWeather.id) : 'clear';

  return (
    <WeatherLayout theme={theme}>
      <WeatherDetailView weatherUi={weatherUi} />
    </WeatherLayout>
  );
}
