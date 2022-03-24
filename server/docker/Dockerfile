FROM node:16

WORKDIR /server

COPY ./ /server/

RUN npm install

EXPOSE 8080

CMD [ "node", "index.js" ]