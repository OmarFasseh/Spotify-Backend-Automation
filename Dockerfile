FROM node:alpine 

WORKDIR '/backend'
COPY package.json .
RUN npm install
COPY . .
COPY service-account-file.json ..
#RUN npm run test
