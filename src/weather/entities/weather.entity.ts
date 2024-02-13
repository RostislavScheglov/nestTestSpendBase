import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { WeatherData } from '../dto/weather.dto';

@Entity('Weather')
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('double precision')
  lat: number;

  @Column('double precision')
  lon: number;

  @Column({ nullable: true })
  part: string | null;

  @Column('json')
  data: WeatherData;
}
