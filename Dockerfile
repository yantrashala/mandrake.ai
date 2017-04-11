FROM node:7-alpine

MAINTAINER Siddhartha Lahiri "siddhartha.lahiri@gmail.com"

# Install Python.
RUN apk add --update \
    python \
    python-dev \
    py-pip \
    build-base \
  && pip install virtualenv \
  && rm -rf /var/cache/apk/*

EXPOSE 1880

# Home directory for Mandrake-AI application source code.
RUN mkdir /home/mandrake-ai
WORKDIR /home/mandrake-ai

COPY . /home/mandrake-ai

RUN addgroup mandrake-ai \
    && adduser -h /home/mandrake-ai -s /bin/sh -D -G mandrake-ai mandrake-ai \
    && mkdir /data \
    && chown -R mandrake-ai:mandrake-ai /data \
    && chown -R mandrake-ai:mandrake-ai /home/mandrake-ai

USER mandrake-ai
VOLUME /data

# Install app dependencies
RUN npm config set loglevel warn
RUN npm install --quiet --unsafe-perm

CMD [ "npm", "start" ]
