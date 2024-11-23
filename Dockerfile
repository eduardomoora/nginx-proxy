
FROM node:16

WORKDIR /app

COPY index.js .
COPY public ./public
COPY package.json .

RUN npm install

EXPOSE 3000

CMD ["node","index.js"]






