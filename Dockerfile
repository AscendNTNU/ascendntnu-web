FROM node:9 as build-deps

WORKDIR /temp
ADD package.json yarn.lock ./
RUN npm install

ADD . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /temp/build /usr/share/nginx/html
COPY --from=build-deps /temp/public /usr/share/nginx/html
COPY --from=build-deps /temp/api /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]