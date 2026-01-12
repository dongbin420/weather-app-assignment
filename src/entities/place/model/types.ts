export interface CoordToLabelParams {
  lon: number;
  lat: number;
}

export interface KakaoMeta {
  total_count: number;
}

export interface KakaoAddress {
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  mountain_yn: 'Y' | 'N';
  main_address_no: string;
  sub_address_no: string;
}

export interface KakaoRoadAddress {
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
}

export interface CoordToAddressDocument {
  address: KakaoAddress | null;
  road_address: KakaoRoadAddress | null;
}

export interface CoordToLabelResponse {
  meta: KakaoMeta;
  documents: CoordToAddressDocument[];
}
