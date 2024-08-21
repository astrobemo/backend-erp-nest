import { Module } from '@nestjs/common';
import { WarnaController } from './warna.controller';
import { WarnaService } from './warna.service';

@Module({
  controllers: [WarnaController],
  providers: [WarnaService]
})
export class WarnaModule {}
