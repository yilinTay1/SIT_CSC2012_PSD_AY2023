FROM node AS frontend

WORKDIR /client

RUN npm install -g npm@9.6.2

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]

# docker build -t            frontend .
# docker run -d -p 3000:3000 frontend