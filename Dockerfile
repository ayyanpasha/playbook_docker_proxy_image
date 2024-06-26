# Use the official Node.js 14 image
FROM node:14

# Set the working directory in the container
WORKDIR .

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose ports
EXPOSE 3002
EXPOSE 3001

# Command to run the application
CMD ["npm", "start"]
