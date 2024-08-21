import { Injectable } from '@nestjs/common';

@Injectable()
export class SatuanService {
    findAll(): string {
        return 'This action returns all satuan';
    }
}
