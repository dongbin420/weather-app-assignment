export interface PlaceSearchResult {
  id: string;
  label: string;
}

export interface ScoredPlace {
  raw: string;
  score: number;
}
