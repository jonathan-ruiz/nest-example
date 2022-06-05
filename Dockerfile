FROM node:18.2.0-alpine3.14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install sequelize-cli
CMD [ "npm", "run", "start:dev" ]
