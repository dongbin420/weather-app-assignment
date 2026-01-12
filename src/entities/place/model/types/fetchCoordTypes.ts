export interface LabelToCoordParams {
  query: string;
}

export interface LabelToCoordMeta {
  total_count: number;
  pageable_count: number;
  is_end: boolean;
}

export interface LabelToCoordAddress {
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  region_3depth_h_name: string;
  h_code: string;
  b_code: string;
  mountain_yn: 'Y' | 'N';
  main_address_no: string;
  sub_address_no: string;
  x: string;
  y: string;
}

export interface LabelToCoordRoadAddress {
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  road_name: string;
  underground_yn: 'Y' | 'N';
  main_building_no: string;
  sub_building_no: string;
  building_name: string;
  zone_no: string;
  x: string;
  y: string;
}

export interface LabelToCoordDocument {
  address_name: string;
  address_type: 'REGION' | 'ROAD' | 'REGION_ADDR' | 'ROAD_ADDR';
  x: string;
  y: string;
  address: LabelToCoordAddress | null;
  road_address: LabelToCoordRoadAddress | null;
}

export interface LabelToCoordResponse {
  meta: LabelToCoordMeta;
  documents: LabelToCoordDocument[];
}
