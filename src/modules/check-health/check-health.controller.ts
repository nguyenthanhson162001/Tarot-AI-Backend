import { Controller, Get, Logger } from '@nestjs/common'
import { CheckHealthService } from './check-health.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { API_TAGS } from 'src/infrastructure/swagger'
import { checkHealthPaths } from './check-health.constants'

@Controller(checkHealthPaths.prefix)
@ApiTags(API_TAGS.HEALTH)
export class CheckHealthController {
  private readonly logger = new Logger(CheckHealthController.name)
  constructor(private readonly appService: CheckHealthService) { }

  @Get(checkHealthPaths.checkHealth.path)
  @ApiOperation(checkHealthPaths.checkHealth.operation)
  checkHealth(): string {
    this.logger.log('Checking health')
    return this.appService.checkHealth()
  }
}
