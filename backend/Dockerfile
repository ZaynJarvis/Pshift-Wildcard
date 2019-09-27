FROM node
WORKDIR /app
COPY ./package.json .
RUN sudo apt-get install redis-server && npm install --only=prod

WORKDIR /app/build
COPY ./build/. .

CMD redis-cli flushall && redis-server --daemonize yes && node index.js

EXPOSE 3000
