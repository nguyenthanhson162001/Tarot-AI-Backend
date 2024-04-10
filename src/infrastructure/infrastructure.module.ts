
import { Global, Module, Provider } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

const providers: Provider[] = []

const imports = [
  ConfigModule.forRoot()
]

const exportsProviders = []

@Global()
@Module({
  imports: imports,
  providers: providers,
  exports: exportsProviders
})

export class InfrastructureModule { }
