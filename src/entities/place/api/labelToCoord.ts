import { kakaoHttp } from '@/shared/api/http';
import type { LabelToCoordResponse, LabelToCoordParams } from '@/entities/place/model/types/fetchCoordTypes';

export const fetchCoord = async (params: LabelToCoordParams): Promise<LabelToCoordResponse> => {
  const { query } = params;

  // 실제 사용시, 호출할때 변환해서 전달하고 아래는 지우기(ui 레이블로 쓸때도 -가 제거된 상태가 좋음)
  const normalized = query.split('-').join(' ').trim();

  const res = await kakaoHttp.get<LabelToCoordResponse>('/v2/local/search/address.json', {
    params: { query: normalized },
  });

  return res.data;
};
