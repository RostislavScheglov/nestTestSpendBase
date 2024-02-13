import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/weather.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    WeatherModule,
  ],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
