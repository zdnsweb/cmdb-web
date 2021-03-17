FROM node:lts-alpine as builder

COPY . /app

RUN cd /app && yarn && yarn run build

FROM docker.io/gsmlg/nginx

COPY ./nginx.conf /etc/nginx/sites/default
COPY --from=builder /app/build /cmdb-web