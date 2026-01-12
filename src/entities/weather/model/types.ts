export interface OneCallResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    temp: number;
  };
  hourly: Array<{
    dt: number;
    temp: number;
  }>;
  daily: Array<{
    dt: number;
    temp: {
      min: number;
      max: number;
    };
  }>;
}

export interface OneCallParams {
  lat: number;
  lon: number;
}

export interface WeatherUiModel {
  placeLabel: string;
  currentTemp: number;
  todayMin: number;
  todayMax: number;
  hourly: Array<{ dt: number; temp: number }>;
  timezone: string;
  timezoneOffset: number;
}
