FROM node:16-alpine

WORKDIR /program/server

COPY . .

RUN npm install -g pm2 && ./build.sh

CMD ["pm2-runtime","start","ecosystem.config.js"]