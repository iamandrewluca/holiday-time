FROM node:lts-alpine

RUN apk update && apk upgrade
RUN apk add git python make g++

WORKDIR /usr/src/app

COPY --chown=node:node ./package.json /usr/src/app/package.json
COPY --chown=node:node ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install

COPY --chown=node:node . /usr/src/app/

RUN yarn build

USER node

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["yarn", "start"]