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
docker rm -f <container-name>
~~~
### Create and run a new container from an image
~~~
docker run -p port:port --name <container-name> <image-name>
~~~
- -d means: run in the background
- -v <directory on the host system>:<directory in the container> means: the directory on the host system will be accessible from within the container
### Copy files from container to host
~~~
docker cp <source container>:<path in the container> <destination host>
~~~
### Copy files from host to container
~~~
docker cp <source host> <destination container>:<path in the container>
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
### is converted to this docker-compose.yml below
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
  
# Copying docker images to AWS EC2
### Save the image file as tar
~~~
docker save -o 파일명.tar <image_name>
~~~
### Copy the image to EC2
~~~
1. pem과 원하는 파일 전송: mv /mnt/c/users/<윈도우 유저>/desktop/<위치> /home
2. 권한변경 필요하면: chmod 400 aws-jenkins.pem
3. 전송: cd /home -> scp -i aws-jenkins.pem -r <파일> ubuntu@13.211.52.23:/home/ubuntu
~~~
### Execute the image in EC2
~~~
docker load -i 파일명.tar
~~~
