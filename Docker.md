# Docker process
1. Write Dockerfile
2. Build an image using the Dockerfile
3. Write and run docker-compose

# Docker commands
### Build an image using Dockerfile
~~~
docker build -t <image-name> .
~~~
### Remove one or more running containers
~~~
docker stop <container-name>
docker rm <container-name>
~~~
### Create and run a new container from an image
~~~
docker run -d -p port:port --name <container-name> <image-name>
~~~
- -d: run in the background
### Copy all files from a docker image
~~~
docker cp <container>:<file> <destination>
~~~
### Docker image list
~~~
docker image ls
~~~

# docker-compose
Docker Compose is used to define and run a multi-container application. It allows defining a set of containers and their configuration using a YAML file, and then starting and stopping them together with a single command.
~~~
docker run -d -p 27017:27017 -v /data/mongodb:/data/db -v /data/mongodb_config:/data/configdb --name mongodb mongo
docker run -d -p 4000:4000 --name to_do to_do
~~~
### is converted to this docker-compose.yml
~~~
version: '3'

services:
  mongodb:
    ports:
      - "27017:27017"
    volumes:
      - /data/mongodb:/data/db
      - /data/mongodb_config:/data/configdb
    container_name: mongodb
    image: mongo
    restart: always
  to_do:
    ports:
      - "4000:4000"
    container_name: to_do
    image: to_do
~~~
This can be executed with
~~~
docker-compose up -d
~~~
