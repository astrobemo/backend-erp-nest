import { Test, TestingModule } from '@nestjs/testing';
import { WarnaService } from './warna.service';

describe('WarnaService', () => {
  let service: WarnaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarnaService],
    }).compile();

    service = module.get<WarnaService>(WarnaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
