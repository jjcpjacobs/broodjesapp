FROM node:9

# Create app directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install express --save
RUN npm install

CMD [ "npm", "start" ]