import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to PromptHub - A hub for managing and sharing prompts for AI and automation workflows!';
  }
}
