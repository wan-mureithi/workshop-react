FROM node:latest as build

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        git \
        curl \
        build-essential \
        libpq-dev \
        && apt-get clean \
        && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . /app

ENV NODE_ENV=production

RUN npm install
RUN npm run build

FROM ubuntu

RUN apt-get update
RUN apt-get install nginx -y

COPY ./nginx.conf /etc/nginx/sites-available/default
COPY --from=build /app/dist /var/www/html/

EXPOSE 80
EXPOSE 443

CMD ["nginx","-g","daemon off;"]