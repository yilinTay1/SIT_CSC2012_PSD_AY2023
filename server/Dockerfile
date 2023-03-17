FROM node AS backend

WORKDIR /server

RUN npm install -g npm@9.6.2

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

# docker build -t            backend .
# docker run -d -p 5000:5000 backend