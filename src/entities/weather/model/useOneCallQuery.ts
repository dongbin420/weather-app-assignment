import { useQuery } from '@tanstack/react-query';
import { fetchOneCall } from '../api/owmOneCall';

export const useOneCallQuery = ({ lat, lon }: { lat: number; lon: number }) => {
  return useQuery({
    queryKey: ['onecall', { lat, lon }],
    queryFn: () => fetchOneCall({ lat, lon }),
    enabled: Number.isFinite(lat) && Number.isFinite(lon),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
