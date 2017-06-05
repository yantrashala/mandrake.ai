FROM node:6-alpine

MAINTAINER Siddhartha Lahiri "siddhartha.lahiri@gmail.com"

ENV PATH /root/.yarn/bin:$PATH

RUN apk update \
  && apk add curl bash binutils tar git openssh \
  && rm -rf /var/cache/apk/* \
  && /bin/bash \
  && touch ~/.bashrc \
  && curl -o- -L https://yarnpkg.com/install.sh | bash

# Home directory for Mandrake-AI application source code.

RUN mkdir /home/bot-connector
WORKDIR /home/bot-connector

ADD . /home/bot-connector

RUN yarn install
