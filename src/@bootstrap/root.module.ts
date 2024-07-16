import { Module, Provider } from '@nestjs/common';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { APIModule } from 'src/modules/api.module';

const imports = [
    InfrastructureModule,
    APIModule
]
const providers: Provider[] = []

const exportsProviders = []

@Module({
    imports: imports,
    providers: providers,
    exports: exportsProviders,
})
export class RootModule { }
