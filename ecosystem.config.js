const env = process.env.NODE_PROFILE || 'dev';
let logPath = './logs/';
if (env.toLowerCase() != 'dev') {
  logPath = '/data/logs/';
}
module.exports = {
  apps: [
    {
      name: 'server',
      exec_mode: 'cluster',
      instances: 3,
      instance_var: 'INSTANCE_ID',
      //error_file: logPath + "err.log",//错误输出日志
      //out_file: logPath + "out.log", //日志
      script: './dist/index.js',
      //log_date_format: "YYYY-MM-DD HH:mm:ss.SSS "
    },
  ],
};
