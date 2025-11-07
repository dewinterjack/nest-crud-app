import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from './env.schema';

@Injectable()
export class TypedConfigService {
  constructor(private configService: ConfigService<EnvConfig>) {}

  get<T extends keyof EnvConfig>(key: T): EnvConfig[T] {
    return this.configService.get(key, { infer: true })!;
  }
}
