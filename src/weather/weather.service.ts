import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weather } from './entities/weather.entity';
import axios from 'axios';
import { WeatherDto } from './dto/weather.dto';

@Injectable()
export class WeatherService {
  constructor(
    @InjectRepository(Weather)
    private weatherRepository: Repository<Weather>,
  ) {}

  async getWeather(weatherDto: WeatherDto) {
    try {
      const { lat, lon } = weatherDto;
      const part = weatherDto.part ? weatherDto.part : null;

      const weather = await this.weatherRepository.findOne({
        where: { lat, lon, part },
      });
      if (weather) {
        console.log('Data from database');
        return weather.data;
      }

      const response = await axios.get(
        'https://api.openweathermap.org/data/3.0/onecall',
        {
          params: {
            lat,
            lon,
            part,
            appid: '8f23a7b3887464b1c321fb4896fadd04',
          },
        },
      );
      const newWeather = this.weatherRepository.create({
        lat,
        lon,
        part,
        data: response.data,
      });

      await this.weatherRepository.save(newWeather);

      return newWeather.data;
    } catch (error) {
      console.log(error);
    }
  }
}
