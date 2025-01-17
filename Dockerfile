FROM node:20.11.0 AS base
ARG web=/app
ARG external_port=3000

FROM base AS deps
WORKDIR ${web}
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN yarn install --frozen-lockfile


FROM base AS builder
WORKDIR ${web}
COPY --from=deps ${web}/node_modules ./node_modules
COPY . .

RUN npx vite build

FROM base AS runner
WORKDIR ${web}

COPY --from=builder ${web}/dist ./dist
COPY package.json ./

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

EXPOSE ${external_port}
ENV PORT=${external_port}

CMD ["npx", "vite", "preview", "--port", "3000", "--host"]