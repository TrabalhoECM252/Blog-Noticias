FROM node:alpine

RUN mkdir mss-usuarios

COPY . ./mss-usuarios

WORKDIR /mss-usuarios/

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]