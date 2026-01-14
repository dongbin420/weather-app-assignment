import type { PlaceSearchResult } from '../model/types';
import { idToLabel } from '@/shared/lib/place/idToLabel';

export const mapToSearchUiModel = (raw: string): PlaceSearchResult => {
  return {
    id: raw,
    label: idToLabel(raw),
  };
};
