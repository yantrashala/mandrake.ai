FROM node:6-alpine

MAINTAINER Siddhartha Lahiri "siddhartha.lahiri@gmail.com"

RUN apk add --update \
    file \
    libpng \
    build-base \
    libtool \
    automake \
    autoconf \
    nasm \
    libpng-dev \
    bash \
  && rm -rf /var/cache/apk/*

RUN npm config set loglevel warn

# Home directory for Mandrake-AI application source code.
RUN mkdir /home/mandrake-ai
WORKDIR /home/mandrake-ai
ADD . /home/mandrake-ai

RUN cd /home/mandrake-ai && npm install && npm run build && npm run build:dll

RUN addgroup mandrake-ai \
    && adduser -h /home/mandrake-ai -s /bin/sh -D -G mandrake-ai mandrake-ai \
    && mkdir /data \
    && chown -R mandrake-ai:mandrake-ai /data \
    && chown -R mandrake-ai:mandrake-ai /home/mandrake-ai

USER mandrake-ai

EXPOSE 4000

CMD npm start
