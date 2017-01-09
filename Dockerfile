FROM node:6

RUN mkdir /ascend-web
WORKDIR /ascend-web
ADD package.json ./
RUN npm install

RUN npm i -g pm2

COPY . ./
EXPOSE 8080

CMD ["pm2", "start", "server.js", "--no-daemon"]
