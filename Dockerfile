FROM node:14
ARG SERVER_PORT

ENV DOCKER true

WORKDIR /usr/src/app
COPY app/package*.json ./
RUN npm install

COPY app/ ./

EXPOSE ${SERVER_PORT}
CMD [ "node", "index.js" ]