FROM node:6

MAINTAINER Siddhartha Lahiri "siddhartha.lahiri@gmail.com"

VOLUME /data

RUN mkdir -p /usr/src/mandrake
WORKDIR /usr/src/mandrake
COPY . /usr/src/mandrake/

RUN npm install
EXPOSE 9000

CMD ["npm", "start", "--", "--userDir", "/data"]
