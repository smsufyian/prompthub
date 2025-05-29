import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(private readonly health: HealthCheckService) {}

  @Get('live')
  @HealthCheck()
  @ApiOperation({ summary: 'Check if the application is running' })
  @ApiResponse({ 
    status: 200, 
    description: 'The application is healthy',
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'ok' },
        info: { type: 'object', example: {} },
        error: { type: 'object', example: {} },
        details: { type: 'object', example: {} }
      }
    }
  })
  check() {
    return this.health.check([]);
  }
}
