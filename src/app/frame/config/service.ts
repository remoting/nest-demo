import { Injectable } from '@nestjs/common';
import { subscribe } from '../../../agent/nacos.worker';
@Injectable()
export class ConfigService {
  config: any;

  constructor() {
    subscribe(this);
  }

  get(key: string): string {
    return this.config[key];
  }
}
