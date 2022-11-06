FROM node:alpine

RUN mkdir mss-noticias

COPY . ./mss-noticias

WORKDIR /mss-noticias/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]