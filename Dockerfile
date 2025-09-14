FROM node:22-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package*.json yarn.lock* ./

RUN yarn install --frozen-lockfile

FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN yarn build

FROM node:22-alpine AS runner
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 --ingroup nodejs nestjs

WORKDIR /app

RUN chown -R nestjs:nodejs /app

COPY package*.json yarn.lock* ./

RUN yarn install --prod --frozen-lockfile && yarn cache clean

COPY --from=builder --chown=nestjs:nodejs /app/dist ./dist

USER nestjs

EXPOSE $PORT


CMD ["node", "dist/main"]
