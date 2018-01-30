FROM node:6

WORKDIR /srv/ascend
ADD package.json yarn.lock ./
RUN yarn

COPY . .
RUN npm run build
