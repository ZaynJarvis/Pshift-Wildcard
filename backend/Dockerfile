FROM node:10
WORKDIR /app
COPY ./package.json .
RUN wget http://download.redis.io/redis-stable.tar.gz && \
    tar xvzf redis-stable.tar.gz && \
    cd redis-stable && \
    make && \
    mv src/redis-server /usr/bin/ && \
    mv src/redis-cli /usr/bin/ && \
    cd .. && \
    rm -r redis-stable && \
    npm install -g concurrently

RUN npm i

COPY . .

CMD concurrently "/usr/bin/redis-server --bind '0.0.0.0'" "sleep 5s; redis-cli flushall; npm run server"

EXPOSE 3001
