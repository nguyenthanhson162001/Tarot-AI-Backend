import { Module } from '@nestjs/common';
import { CheckHealthController } from './check-health.controller';
import { CheckHealthService } from './check-health.service';

@Module({
  imports: [],
  controllers: [CheckHealthController],
  providers: [CheckHealthService],
})
export class CheckHealthModule { }
