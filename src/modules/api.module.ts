import { Module, Provider } from '@nestjs/common'
import { CheckHealthModule } from './check-health';
import { DeskModule } from './desk/desk.module';

const imports = [
  CheckHealthModule,
  DeskModule
]
const providers: Provider[] = []

const exportsProviders = []

@Module({
  imports: imports,
  providers: providers,
  exports: exportsProviders,
})
export class APIModule { }
