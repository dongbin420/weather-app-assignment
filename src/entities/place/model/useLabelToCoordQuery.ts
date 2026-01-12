import { useQuery } from '@tanstack/react-query';
import { fetchCoord } from '@/entities/place/api/labelToCoord';

export const useLabelToCoordQuery = (query: string) => {
  const q = query.trim();

  return useQuery({
    queryKey: ['labelToCoord', { q }],
    queryFn: () => fetchCoord({ query: q }),
    enabled: q.length > 0,
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
