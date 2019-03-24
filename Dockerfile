### STAGE 1: Build ###
FROM node:8-alpine as builder
COPY package.json package-lock.json ./
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app
WORKDIR /ng-app
COPY . .
RUN $(npm bin)/ng build --configuration=production

### STAGE 2: Setup ###
FROM nginx:alpine
COPY --from=builder /ng-app/dist /usr/share/nginx/html
EXPOSE 80
