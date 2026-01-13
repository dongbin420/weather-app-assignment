import type { PlaceSearchResult } from '../model/types';
import { scorePlace } from './scoring';
import { mapToSearchUiModel } from './mapToSearchUiModel';

export const searchPlacesFromList = (places: string[], query: string, limit: number = 10): PlaceSearchResult[] => {
  const q = query.trim();
  if (!q) return [];

  const scored = places.map((raw) => scorePlace(raw, q)).filter((v) => v !== null);

  scored.sort((a, b) => {
    if (a.score !== b.score) return a.score - b.score;
    return a.raw.localeCompare(b.raw);
  });

  return scored.slice(0, limit).map(({ raw }) => mapToSearchUiModel(raw));
};
