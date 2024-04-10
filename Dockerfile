FROM node:lts-alpine AS build

WORKDIR /frontend

COPY package*.json .

RUN npm install -g vite
RUN npm install

COPY . .
RUN ls -l
RUN ls -l src
RUN ls -l src/layout
RUN npm run build

FROM ubuntu As prod
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /frontend/dist /var/www/html/
EXPOSE 3000
CMD ["nginx","-g","daemon off;"]