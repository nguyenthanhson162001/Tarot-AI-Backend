import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_TAGS } from 'src/infrastructure/swagger';
import { appPaths } from './app.constants';


@Controller(appPaths.prefix)
@ApiTags(API_TAGS.HEALTH)
export class AppController {

  constructor(private readonly appService: AppService) { }

  @Get(appPaths.checkHealth.path)
  @ApiOperation(appPaths.checkHealth.operation)
  checkHealth(): string {
    return this.appService.checkHealth();
  }
}