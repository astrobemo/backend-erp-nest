import { Controller, Get } from '@nestjs/common';
import { SatuanService } from './satuan.service';

@Controller('satuan')
export class SatuanController {
    constructor(private readonly satuanService: SatuanService) {}

    @Get()
    findAll() {
        return this.satuanService.findAll();
    }
}
