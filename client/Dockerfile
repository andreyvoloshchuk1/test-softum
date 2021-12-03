FROM node:lts-alpine

WORKDIR /app

COPY package.json /app

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "run", "serve"]