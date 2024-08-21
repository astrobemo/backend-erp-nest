import { Injectable } from '@nestjs/common';

@Injectable()
export class SupplierService {
    findAll(): string {
        return 'This action returns all supplier';
    }
}
