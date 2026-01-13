import { kakaoHttp } from '@/shared/api/http';
import type { LabelToCoordResponse, LabelToCoordParams } from '@/entities/place/model/types/fetchCoordTypes';

export const fetchCoord = async (params: LabelToCoordParams): Promise<LabelToCoordResponse> => {
  const { query } = params;

  const res = await kakaoHttp.get<LabelToCoordResponse>('/v2/local/search/address.json', {
    params: { query },
  });

  return res.data;
};
