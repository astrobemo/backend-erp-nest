import { Injectable } from '@nestjs/common';

@Injectable()
export class WarnaService {
    findAll(): string {
        return 'This action returns all warna';
    }
}
