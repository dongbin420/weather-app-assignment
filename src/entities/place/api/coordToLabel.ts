import type { CoordToLabelParams, CoordToLabelResponse } from '@/entities/place/model/types/fetchLabelTypes';
import { kakaoHttp } from '@/shared/api/http';

export const fetchLabel = async (params: CoordToLabelParams): Promise<CoordToLabelResponse> => {
  const { lon, lat } = params;

  const res = await kakaoHttp.get<CoordToLabelResponse>('/v2/local/geo/coord2address.json', {
    params: {
      x: lon,
      y: lat,
      input_coord: 'WGS84',
    },
  });

  return res.data;
};
