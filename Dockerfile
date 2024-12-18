FROM node:18
WORKDIR /main
COPY ./main
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "main.js"]
