FROM node:wheezy

WORKDIR /usr/src/app

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]