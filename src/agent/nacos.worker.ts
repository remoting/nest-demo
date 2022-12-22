let configService = null;

export const subscribe = (config: any) => {
  configService = config;

  setInterval(() => {
    if (configService.config == null) {
      configService.config = {};
      configService.config.age = 0;
    }
    configService.config.age = configService.config.age + 1;
  }, 1000);
};
