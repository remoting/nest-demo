import { Injectable, Logger } from '@nestjs/common';
@Injectable()
export class MySqlService {
  private readonly logger = new Logger(MySqlService.name);
  constructor() {
    //
  }
  public async query(sql: string, params: Array<any>): Promise<any> {
    //
    this.logger.log('ssds');
    return {};
  }
}
