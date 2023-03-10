import { Test, TestingModule } from '@nestjs/testing';
import { MockInterviewController } from './mock-interview.controller';
import { MockInterviewService } from './mock-interview.service';

describe('MockInterviewController', () => {
  let controller: MockInterviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MockInterviewController],
      providers: [MockInterviewService],
    }).compile();

    controller = module.get<MockInterviewController>(MockInterviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
