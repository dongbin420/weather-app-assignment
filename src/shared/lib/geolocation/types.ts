export type Coords = { lat: number; lon: number };

export type LocationStatus = 'idle' | 'loading' | 'success' | 'denied' | 'error';

export interface LocationState {
  status: LocationStatus;
  coords?: Coords;
  message?: string;
}
