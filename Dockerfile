FROM node:alpine 

WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
COPY service-account-file.json ..
#RUN npm run test


#FROM mongo
#EXPOSE 27017