FROM node:16 AS builder
ENV PORT=80
WORKDIR /usr/app
COPY . .
RUN npm i -g pnpm && pnpm install && pnpm build
EXPOSE $PORT
ENTRYPOINT npm run start:prod



