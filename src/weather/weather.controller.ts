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
import { CreateWeatherDto } from './dto/create-weather.dto';
import { GetWeatherDto } from './dto/get-weather.dto';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}
  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async find(@Body() createWeatherDto: CreateWeatherDto) {
    const data: any = await this.weatherService.createWeather(createWeatherDto);
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
  async createWeather(@Body() createWeatherDto: CreateWeatherDto) {
    return this.weatherService.createWeather(createWeatherDto);
  }
}
