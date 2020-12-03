FROM node:10.15.2-alpine AS appbuild
WORKDIR /usr/src/app
COPY package.json tsconfig.json ./
RUN npm install express
RUN npm install
COPY . .
RUN npm run build


FROM node:11.10.0-alpine
EXPOSE 80
WORKDIR /usr/src/service
COPY --from=appbuild /usr/src/app/node_modules node_modules
COPY --from=appbuild /usr/src/app/dist dist
USER node
CMD ["node", "./dist/app.js"]
