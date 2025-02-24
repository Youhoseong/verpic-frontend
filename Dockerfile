FROM node:14.17.0 as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@2.1.3 -g --silent

COPY . /usr/src/app
CMD ["npm", "start"]