# Specify a base Image
FROM node:alpine

# Working Directory
WORKDIR /usr/app

# Copy files from source machine to working directory
COPY ./package.json ./

# Install some dependencies 
RUN npm install

# Copy files from source machine to working directory
COPY ./ ./

# Default Command
CMD ["npm", "start"]