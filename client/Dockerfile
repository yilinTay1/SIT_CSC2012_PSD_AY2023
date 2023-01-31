FROM node:19.5.0-bullseye-slim AS frontend

WORKDIR /client

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

# docker build -t            frontend .
# docker run -d -p 3000:3000 frontend