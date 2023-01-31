FROM node:19.5.0-bullseye-slim AS backend

WORKDIR /server

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

# docker build -t            backend .
# docker run -d -p 5000:5000 backend