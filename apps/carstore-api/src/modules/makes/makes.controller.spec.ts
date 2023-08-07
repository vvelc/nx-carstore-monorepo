import { Test, TestingModule } from '@nestjs/testing';
import { MakesController } from './makes.controller';
import { MakesService } from './makes.service';

describe('MakesController', () => {
  let controller: MakesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MakesController],
      providers: [MakesService],
    }).compile();

    controller = module.get<MakesController>(MakesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
