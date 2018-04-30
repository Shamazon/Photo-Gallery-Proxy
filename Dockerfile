FROM node:latest

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 1338

CMD [ "npm", "run", "docker" ]