
import { Global, Module, Provider } from '@nestjs/common'
import { MongooseConfigModule } from './mongooes/mongooes.config'
import { ENVConfigModule } from './env'
const providers: Provider[] = []
const imports = [
  ENVConfigModule,
  MongooseConfigModule
]

const exportsProviders = []

@Global()
@Module({
  imports: imports,
  providers: providers,
  exports: exportsProviders
})

export class InfrastructureModule { }
