# builder
FROM node:16.14.2-alpine AS builder
WORKDIR /app

COPY package.json .
RUN yarn install
COPY . .
RUN npm run build

# prod
FROM nginx:1.20.2
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
