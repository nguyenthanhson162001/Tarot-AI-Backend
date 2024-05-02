import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsString, isBoolean, validateSync } from 'class-validator'

export class ENVConfig {
  @IsInt()
  static readonly PORT = Number(process.env['PORT'])

  @IsString()
  static readonly NODE_ENV = process.env['NODE_ENV']

  @IsString()
  static readonly APP_VERSION = process.env['APP_VERSION']

  @IsString()
  static readonly DOMAIN = process.env['DOMAIN']

  @IsString()
  static readonly BASE_URL = process.env['BASE_URL']

  @IsString()
  static readonly CORS_ORIGIN = process.env['CORS_ORIGIN']

  @IsString()
  static readonly GLOBAL_PREFIX = process.env['GLOBAL_PREFIX']

  @IsString()
  static readonly SWAGGER_PREFIX = process.env['SWAGGER_PREFIX']

  @IsString()
  static readonly SWAGGER_TITLE = process.env['SWAGGER_TITLE']

  @IsString()
  static readonly SWAGGER_DESCRIPTION = process.env['SWAGGER_DESCRIPTION']

  @IsBoolean()
  static readonly IS_SWAGGER_ENABLED = process.env['IS_SWAGGER_ENABLED'] == 'true'

  @IsArray()
  @IsNotEmpty()
  static readonly SWAGGER_SERVERS = process.env['SWAGGER_SERVERS']?.split(',')

  static validate() {
    const errors = validateSync(this)
    if (errors.length > 0) {
      throw new Error(errors.toString())
    }
  }
}

ENVConfig.validate()
