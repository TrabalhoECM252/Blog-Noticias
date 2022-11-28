FROM node:alpine

RUN mkdir mss-usuarios-novo

COPY . ./mss-usuarios-novo

WORKDIR /mss-usuarios-novo/

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]