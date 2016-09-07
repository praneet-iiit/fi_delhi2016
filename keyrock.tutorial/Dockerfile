#FROM ubuntu
FROM node:latest

ENV TERM xterm

COPY . /app
WORKDIR /app
#RUN apt-get -y update && apt-get -y install npm node
RUN ./install.sh

EXPOSE 2000



