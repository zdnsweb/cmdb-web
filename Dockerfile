FROM node:alpine as builder

COPY . /app

RUN cd /app && yarn && yarn -s build

FROM gsmlg/lighttpd

COPY --from=builder /app/build /var/www/localhost

