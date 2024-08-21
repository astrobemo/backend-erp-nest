import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
    findAll(): string {
        return 'This action returns all customer';
    }
}
