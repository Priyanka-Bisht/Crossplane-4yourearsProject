# Use an official Node.js runtime as the base image with version 14.21.3
FROM node:14.21.3

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose a port (if your app listens on a specific port)
EXPOSE 3000

# Define the command to start your application
CMD ["npm", "start"]

# Set the PORT environment variable
ENV PORT=3000