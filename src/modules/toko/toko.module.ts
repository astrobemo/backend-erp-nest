import { Module } from '@nestjs/common';
import { TokoController } from './toko.controller';
import { TokoService } from './toko.service';

@Module({
  controllers: [TokoController],
  providers: [TokoService]
})
export class TokoModule {}
