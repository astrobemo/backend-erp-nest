import { Controller, Get } from '@nestjs/common';
import { TokoService } from './toko.service';

@Controller('toko')
export class TokoController {
    constructor(private readonly tokoService: TokoService) {}

    @Get()
    findAll() {
        return this.tokoService.findAll();
    }
}
