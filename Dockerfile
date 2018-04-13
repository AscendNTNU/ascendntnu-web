FROM mhart/alpine-node:8

WORKDIR /srv/ascend
ADD . .
RUN npm install

# COPY . .
RUN npm run build
