import type { LabelToCoordResponse } from './types/fetchCoordTypes';

export const pickFirstCoords = (data: LabelToCoordResponse): { lat: number; lon: number } | undefined => {
  const doc = data.documents?.[0];
  if (!doc) return undefined;

  const lon = Number(doc.x);
  const lat = Number(doc.y);

  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return undefined;
  return { lat, lon };
};
