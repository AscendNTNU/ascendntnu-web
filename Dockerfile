FROM node:6

RUN apt-get update
RUN apt-get install vim -y

RUN mkdir /ascend-web
WORKDIR /ascend-web
ADD package.json ./
RUN npm install

RUN npm i -g pm2 typescript typings webpack
RUN webpack

COPY . ./
EXPOSE 8080

CMD ["pm2", "start", "server.js", "--no-daemon"]
