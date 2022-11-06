FROM node:alpine

RUN mkdir barramento

COPY . ./barramento

WORKDIR /barramento/

RUN npm install

EXPOSE 10000

CMD ["npm", "start"]