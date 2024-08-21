import { Controller, Get } from '@nestjs/common';
import { WarnaService } from './warna.service';

@Controller('warna')
export class WarnaController {
    constructor(private readonly warnaService: WarnaService) {}

    @Get()
    findAll() {
        return this.warnaService.findAll();
    }
}
