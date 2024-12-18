FROM node:18
COPY . /main
WORKDIR /main
EXPOSE 3000
CMD [ "node","main.js" ]