import { ConfigModule } from '@nestjs/config';
import { plainToClass, plainToClassFromExist, Transform, Type } from 'class-transformer';
import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, validateSync } from 'class-validator';

export class ENVConfig {
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  static readonly PORT: number;

  @IsString()
  @IsNotEmpty()
  static readonly NODE_ENV: string;

  @IsString()
  @IsNotEmpty()
  static readonly APP_VERSION: string;

  @IsString()
  @IsNotEmpty()
  static readonly DOMAIN: string;

  @IsString()
  @IsNotEmpty()
  static readonly BASE_URL: string;

  @IsString()
  @IsNotEmpty()
  static readonly CORS_ORIGIN: string;

  @IsString()
  @IsNotEmpty()
  static readonly GLOBAL_PREFIX: string;

  @IsString()
  @IsNotEmpty()
  static readonly SWAGGER_PREFIX: string;

  @IsString()
  @IsNotEmpty()
  static readonly SWAGGER_TITLE: string;

  @IsString()
  @IsNotEmpty()
  static readonly SWAGGER_DESCRIPTION: string;

  @IsBoolean()
  @Type(() => Boolean)
  static readonly IS_SWAGGER_ENABLED: boolean;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  @Transform(({ value }) => value?.split(','))
  static readonly SWAGGER_SERVERS?: string[];

  @IsString()
  @IsNotEmpty()
  static readonly MONGODB_URI: string;

  static load(): Record<string, any> {
    // convert process.env to plain object
    const plainEnv = Object.keys(process.env).reduce((acc, key) => {
      acc[key] = process.env[key];
      return acc;
    }, {});
    plainToClassFromExist(ENVConfig, plainEnv, { enableImplicitConversion: true });
    return ENVConfig
  }

  static validate(config: Record<string, any>): Record<string, any> {
    // make a deep copy of class ENVConfig 
    const validatedConfig = plainToClassFromExist(ENVConfig, config, { enableImplicitConversion: true });
    const validation = validateSync(validatedConfig);
    if (validation.length > 0) {
      throw new Error(JSON.stringify(validation));
    }

    return config;
  }
}

export const ENVConfigModule = ConfigModule.forRoot({
  isGlobal: true,
  load: [ENVConfig.load],
  validate: ENVConfig.validate,
});
