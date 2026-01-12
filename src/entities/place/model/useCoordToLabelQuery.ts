import { useQuery } from '@tanstack/react-query';
import { fetchLabel } from '../api/coordToLabel';

export const useCoordToLabelQuery = ({ lat, lon }: { lat: number; lon: number }) => {
  return useQuery({
    queryKey: ['coordToLabel', { lat, lon }],
    queryFn: () => fetchLabel({ lat, lon }),
    enabled: Number.isFinite(lat) && Number.isFinite(lon),
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
