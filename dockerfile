FROM node

WORKDIR /usr/app

COPY package*.json .

COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "run", "dev" ]