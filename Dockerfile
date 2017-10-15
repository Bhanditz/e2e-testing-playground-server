FROM node:wheezy

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]