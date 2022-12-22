import * as nacos from 'nacos';

export class NacosManager {
  private client: any;
  private DATA_ID = 'test.yml';
  private GROUP = 'DEFAULT_GROUP';
  private NAMESPACE = process.env.PROJECT_ENV
    ? process.env.PROJECT_ENV
    : 'local';
  private SERVER_ADDR = 'localhost:80';
  constructor() {
    this.getClient();
  }

  private async getClient() {
    this.client = new nacos.NacosConfigClient({
      serverAddr: 'localhost:80',
      namespace: this.NAMESPACE,
    });
  }
}
