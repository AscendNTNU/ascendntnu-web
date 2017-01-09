FROM node:6

RUN mkdir /ascend-web
WORKDIR /ascend-web
RUN npm install

VOLUME /ascend-web
EXPOSE 8080

ENTRYPOINT ["node server.js"]
