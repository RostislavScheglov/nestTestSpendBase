import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherData, WeatherDto } from './dto/weather.dto';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async findWeather(@Body() weatherDto: WeatherDto) {
    const data = await this.weatherService.getWeather(weatherDto);
    return {
      sunrise: data.current.sunrise,
      sunset: data.current.sunset,
      temp: data.current.temp,
      feels_like: data.current.feels_like,
      pressure: data.current.pressure,
      humidity: data.current.humidity,
      uvi: data.current.uvi,
      wind_speed: data.current.wind_speed,
    };
  }

  @Post()
  async createWeather(@Body() weatherDto: WeatherDto) {
    return this.weatherService.getWeather(weatherDto);
  }
}
