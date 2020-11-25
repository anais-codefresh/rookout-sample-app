FROM node:12.13.0 AS builder
WORKDIR /usr/src
ADD package.json .
RUN npm install
RUN npm install express
ADD src ./src
ADD tsconfig.json .
RUN npm run build

FROM node:12.13.0-alpine
WORKDIR /app
ENV NODE_ENV=dev
COPY package*.json ./
RUN npm ci --quiet --only=production
COPY --from=builder /usr/src/dist ./dist