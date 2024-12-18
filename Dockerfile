FROM node:18
COPY . /main
WORKDIR /main
RUN npm install
EXPOSE 3000
CMD ["node", "main.js"]
