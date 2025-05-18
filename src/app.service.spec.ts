import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return welcome message', () => {
    expect(service.getHello()).toBe('Welcome to PromptHub - A hub for managing and sharing prompts for AI and automation workflows!');
  });

  // This test is intentionally failing to verify the pre-push hook
  it('intentionally failing test to verify pre-push hook (updated)', () => {
    expect(true).toBe(false);
  });
});
