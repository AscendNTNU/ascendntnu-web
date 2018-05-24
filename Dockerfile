FROM node:9

WORKDIR /srv/ascend
ADD . .
RUN npm install

# COPY . .
RUN npm run build
