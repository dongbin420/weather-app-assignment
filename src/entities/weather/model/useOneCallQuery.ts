import { useQuery } from '@tanstack/react-query';
import { fetchOneCall } from '../api/owmOneCall';
import { mapToWeatherUiModel } from './mappers';
import type { UseOneCallArgs, WeatherUiModel } from './types';

export const useOneCallQuery = ({ lat, lon, placeLabel, hourlyCount = 24 }: UseOneCallArgs) => {
  return useQuery<WeatherUiModel>({
    // placeLabel은 fetch 결과에 영향을 주지않는 데이터이기에, 경고를 무시
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['onecall', { lat, lon, hourlyCount }],
    queryFn: async () => {
      const raw = await fetchOneCall({ lat, lon });

      return mapToWeatherUiModel(placeLabel, raw, hourlyCount);
    },
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
