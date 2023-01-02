FROM node
WORKDIR /test
COPY package.json /test
RUN install npm
COPY . /test 
CMD node server.js
EXPOSE 5000