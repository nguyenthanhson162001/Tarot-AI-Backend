import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import * as cookieParser from 'cookie-parser'
import * as compression from 'compression'
import * as morgan from 'morgan'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { join } from 'path'
import { Logger } from '@nestjs/common'
import { ENVConfig } from 'src/infrastructure/env'
import { RootModule } from './'

export default class Server {
  private app: NestExpressApplication
  private logger: Logger
  private constructor(app: NestExpressApplication) {
    this.app = app
    this.logger = new Logger(Server.name)
  }

  private async setupMiddleware() {
    this.app.setGlobalPrefix(ENVConfig.GLOBAL_PREFIX)

    this.app.enableCors({ origin: ENVConfig.CORS_ORIGIN })

    this.app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }))

    this.app.use(helmet())

    this.app.use(cookieParser())

    this.app.use(compression())

    this.app.use(morgan('dev'))

    this.app.useStaticAssets(join(__dirname, 'static'))

    this.setupSwagger()
  }

  private setupSwagger() {
    if (ENVConfig.IS_SWAGGER_ENABLED) {
      const options = new DocumentBuilder()
        .setTitle(ENVConfig.SWAGGER_TITLE)
        .setDescription(ENVConfig.SWAGGER_DESCRIPTION)
        .setVersion(ENVConfig.APP_VERSION)

      ENVConfig.SWAGGER_SERVERS.forEach((server) => options.addServer(server))

      const document = SwaggerModule.createDocument(this.app, options.build())

      SwaggerModule.setup(ENVConfig.SWAGGER_PREFIX, this.app, document)
    }
  }

  public static async initial() {
    const app = await NestFactory.create<NestExpressApplication>(RootModule)

    const server = new Server(app)

    await server.setupMiddleware()

    return server
  }

  public async start() {
    this.app.listen(ENVConfig.PORT, () => {
      console.log('\n\n-------------------------------------------------------------------------------------------------------')
      this.logger.verbose(`Server running on port ${ENVConfig.BASE_URL}`)
      if (ENVConfig.IS_SWAGGER_ENABLED) {
        this.logger.verbose(`Swagger running on ${ENVConfig.BASE_URL}/${ENVConfig.SWAGGER_PREFIX}`)
      }
      console.log('-------------------------------------------------------------------------------------------------------\n')
    })
  }
}
