import { Module, Provider } from '@nestjs/common'
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { AppModule } from './app';

const imports = [
  InfrastructureModule,
  AppModule
]
const providers: Provider[] = []

const exportsProviders = []

@Module({
  imports: imports,
  providers: providers,
  exports: exportsProviders,
})
export class RootModule { }
