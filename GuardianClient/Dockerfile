FROM node:latest as node
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node usr/src/app/dist/GuardianClient /usr/share/nginx/html


# FROM node:10.13-alpine
# ENV NODE_ENV production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# EXPOSE 3000
# CMD npm start