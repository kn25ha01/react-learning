FROM node:16.14.2-alpine
WORKDIR /app

COPY package.json .
RUN yarn install
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
