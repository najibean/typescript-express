FROM node:16-alpine AS appbuild
WORKDIR /usr/src/app
COPY package.json ./
COPY tsconfig.json ./
RUN npm install
COPY ./src ./src
CMD [ "npm", "start"]