import type { PlaceSearchResult } from '../model/types';

export const mapToSearchUiModel = (raw: string): PlaceSearchResult => {
  return {
    id: raw,
    label: raw.split('-').join(' ').trim(),
  };
};
