FROM node:9

# Create app directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . .

RUN npm install
RUN npm install -g nodemon

#EXPOSE 3000
CMD [ "nodemon", "-e", "js,html",  "app" ]