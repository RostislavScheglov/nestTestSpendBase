import { PartialType } from '@nestjs/mapped-types';
import { CreateWeatherDto } from './create-weather.dto';

export class GetWeatherDto extends PartialType(CreateWeatherDto) {
  lat: number;
  lon: number;
  part?: string;
}
