FROM node
WORKDIR /app
COPY ./package.json .
RUN npm install --only=prod

WORKDIR /app/build
COPY ./build/. .

CMD node index.js

EXPOSE 3000
