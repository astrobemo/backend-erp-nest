import { Test, TestingModule } from '@nestjs/testing';
import { WarnaController } from './warna.controller';

describe('WarnaController', () => {
  let controller: WarnaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WarnaController],
    }).compile();

    controller = module.get<WarnaController>(WarnaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
