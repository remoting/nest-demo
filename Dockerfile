FROM node:16-alpine

WORKDIR /program/server

COPY ecosystem.config.js package.json dist node_modules tsconfig.build.json tsconfig.json ./

RUN npm install --registry=https://registry.npm.taobao.org

CMD ["pm2-runtime","start","ecosystem.config.js"]