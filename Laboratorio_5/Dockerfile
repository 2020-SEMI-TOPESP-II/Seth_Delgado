FROM node:latest
RUN mkdir ~/Lab5
WORKDIR ~/Lab5
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"] 
 
