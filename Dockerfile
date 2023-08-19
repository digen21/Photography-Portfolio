# 1 
FROM node:18

WORKDIR /app

# copying packege.json
COPY package*.json ./

# installing dependency
RUN npm install

# copying project dir
COPY . .

# running build command
RUN npm run build

# PORT
EXPOSE 3000

# command to run
CMD [ "npm", "start"]