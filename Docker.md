CI/CD pipelines use a technique called caching, which can decrease a lot of time taken for "npm install".<br>
That's why including the **npm install** command in the Dockerfile is a common approach.<br>
The npm install command is run again only when the dependencies have changed.<br>

### Example of Dockerfile for node.js
~~~bash
# Use a Node.js base image
FROM node:latest

# Create and set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
~~~
