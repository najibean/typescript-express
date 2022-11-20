FROM node:14-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY tsconfig.json ./
RUN npm install
COPY ./src ./src
EXPOSE 8000
CMD [ "npm", "start"]