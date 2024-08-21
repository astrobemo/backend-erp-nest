import { Injectable } from '@nestjs/common';

@Injectable()
export class TokoService {
    findAll(): string {
        return 'This action returns all toko';
    }
}
