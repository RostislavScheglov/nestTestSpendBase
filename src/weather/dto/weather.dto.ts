export class WeatherDto {
  lat: number;
  lon: number;
  part?: string | null;
  data?: WeatherData;
}
export type WeatherData = {
  current: CurrentWeather;
  [key: string]: any;
};

type CurrentWeather = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: any;
};
