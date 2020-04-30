#here we use node 12 as recommended by the documentation
FROM node:12 as node

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

RUN npm install

RUN npx ng build --prod

# alpine is a tool for reducing dockerimage size for clients
FROM nginx:alpine

COPY --from=node usr/src/app/dist/GuardianClient /usr/share/nginx/html

# support deep linking
COPY nginx-custom.conf /etc/nginx/conf.d/defaultconf


# FROM node:10.13-alpine
# ENV NODE_ENV production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# EXPOSE 3000
# CMD npm start