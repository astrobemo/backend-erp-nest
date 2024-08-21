import { Injectable } from '@nestjs/common';

@Injectable()
export class BarangService {
    findAll(): string {
        return 'This action returns all barang';
    }
}
