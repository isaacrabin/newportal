FROM node:14 as builder

# Create app directory
RUN mkdir usr/src/app
WORKDIR /usr/src/app

ENV PATH="./node_modules/.bin:$PATH"

COPY package.json package-lock.json ./
RUN npm install && npm install --production=false --package-lock-only

COPY . .

RUN ng build --prod --aot=true --build-optimizer --output-path=dist

FROM nginx:1.15.8-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx-dev.conf /etc/nginx/conf.d/

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
