FROM node:16 AS builder
WORKDIR /usr/app
COPY . .
RUN npm i -g pnpm
RUN pnpm install && pnpm build

FROM node:16
WORKDIR /usr/app
COPY --from=builder /usr/app/package*.json ./
COPY --from=builder /usr/app/dist ./dist
COPY --from=builder /usr/app/public ./public
RUN npx pnpm install
ENV PORT=80
EXPOSE $PORT
ENTRYPOINT npm run start:prod



