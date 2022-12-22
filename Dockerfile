FROM node:16-alpine

WORKDIR /program/server

COPY . ./

RUN build.sh

CMD ["pm2-runtime","start","ecosystem.config.js"]