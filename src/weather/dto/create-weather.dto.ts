export class CreateWeatherDto {
  lat: number;
  lon: number;
  part?: string | null;
  data: object;
}
