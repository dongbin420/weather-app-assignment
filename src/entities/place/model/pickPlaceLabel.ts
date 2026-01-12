import type { CoordToLabelResponse } from './types/fetchLabelTypes';

export const pickPlaceLabel = (data: CoordToLabelResponse): string => {
  const doc = data.documents?.[0];
  if (!doc) return '현재 위치';

  const addr = doc.address;
  const road = doc.road_address;

  // 1) 지번 없이 지명만
  const parts = addr
    ? [addr.region_1depth_name, addr.region_2depth_name, addr.region_3depth_name].filter((v) => Boolean(v))
    : [];

  // region_2 까지는 있어야 정확함
  if (parts.length >= 2) {
    return parts.join(' ');
  }

  // 2) fallback: 지번 전체 주소
  if (addr?.address_name) return addr.address_name;

  // 3) fallback: 도로명 전체 주소
  if (road?.address_name) return road.address_name;

  return '현재 위치';
};
