# Use the official Node.js 16 image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application code
COPY . .

# Expose port 3001
EXPOSE 3001

# Command to run the application
CMD ["npm", "start"]
