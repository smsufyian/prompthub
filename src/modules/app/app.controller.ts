import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { AppService } from '@modules/app/app.service';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get a greeting message' })
  @ApiResponse({ status: 200, description: 'Returns a greeting message' })
  getHello(): string {
    return this.appService.getHello();
  }
}
