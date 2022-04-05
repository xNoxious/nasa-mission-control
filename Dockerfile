# Choose basic image - alpine is a very lightweight linux flavour
FROM node:lts-alpine

# Specify a working directory
WORKDIR /app

# npm run install-client will only be run if package.json or 
# client/package.json get updated
# --only=production: install packages without dev dependencies
# package*.json ensures we copy both package.json and package-lock.json
COPY package*.json ./
COPY client/package*.json client/
RUN npm run install-client --only=production 

COPY server/package*.json server/
RUN npm run install-server --only=production 

# --prefix client is a command from our own package.json
COPY client/ client/
RUN npm run build --prefix client

COPY server/ server/

# Run the image via a specific user, otherwise it would use root
USER node

# Because of this command in the client app:
# "build": "BUILD_PATH=../server/public react-scripts build",
# we store a build version on the client side so no need to start client (check app.js) 
# CMD: gives instructions on what to run when the container starts
CMD ["npm", "start", "--prefix", "server"]

# Choose what port to expose
EXPOSE 8000