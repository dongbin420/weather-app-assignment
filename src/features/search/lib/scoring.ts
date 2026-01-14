import type { ScoredPlace } from '../model/types';
import { idToLabel } from '@/shared/lib/place/idToLabel';

export const scorePlace = (raw: string, query: string): ScoredPlace | null => {
  const searchable = idToLabel(raw);
  const q = query.trim();
  const pos = searchable.indexOf(q);

  if (pos === -1) return null;

  const starts = pos === 0;
  const score = (starts ? 0 : 1000) + pos * 10 + searchable.length;

  return { raw, score };
};
