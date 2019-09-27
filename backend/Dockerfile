FROM node
WORKDIR /app
COPY ./package.json .
RUN wget http://download.redis.io/redis-stable.tar.gz && \
    tar xvzf redis-stable.tar.gz && \
    cd redis-stable && \
    make && \
    mv src/redis-server /usr/bin/ && \
    cd .. && \
    rm -r redis-stable && \
    npm install -g concurrently   

RUN npm install --only=prod

WORKDIR /app/build
COPY ./build/. .

CMD concurrently "/usr/bin/redis-server --bind '0.0.0.0'" "sleep 5s; node index.js"

EXPOSE 3000
