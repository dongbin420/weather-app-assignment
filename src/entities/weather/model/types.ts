export interface OneCallWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface OneCallResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    temp: number;
    weather: OneCallWeather[];
  };
  hourly: Array<{
    dt: number;
    temp: number;
    weather: OneCallWeather[];
  }>;
  daily: Array<{
    dt: number;
    temp: {
      min: number;
      max: number;
    };
    weather: OneCallWeather[];
  }>;
}

export interface OneCallParams {
  lat: number;
  lon: number;
}

export interface WeatherUiCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherUiModel {
  placeLabel: string;
  alias?: string;
  currentTemp: number;
  currentWeather: WeatherUiCondition | null;
  todayMin: number;
  todayMax: number;
  hourly: Array<{ dt: number; temp: number; timeLabel: string; weather: WeatherUiCondition | null }>;
  timezone: string;
  timezoneOffset: number;
}
