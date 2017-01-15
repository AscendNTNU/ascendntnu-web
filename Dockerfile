FROM ascend/ascend-web-baseimage

RUN apt-get update

WORKDIR /ascend-web
ADD package.json ./
RUN npm install --silent

COPY . ./
RUN webpack
EXPOSE 8080

CMD ["pm2", "start", "server.js", "--no-daemon"]
