FROM node:6

WORKDIR /srv/ascend
ADD . .
RUN npm install

# COPY . .
RUN npm run build
