## Installation of Docker
#### [Official guide](https://docs.docker.com/engine/install/ubuntu/)
~~~
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo \
"deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
"$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo apt install docker-compose
~~~

# How to create and execute a docker image
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
### Remove one or more images
~~~
docker rmi <image-name>
~~~
### Remove all containers
~~~
docker rm -f $(docker ps -qa)
~~~
### Create and run a new container from images
~~~
docker run -d -p port:port --name <container-name> <image-name1> <image-name2>
~~~
- `-d`: run in the background
- `-v` <directory on the host system>:<directory in the container> means: the directory on the host system will be accessible from within the container
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
docker images
~~~
### Delete everything
~~~
docker system prune -a
~~~
### Docker volume
Volumes mapped to storage outside the container need to be created because the storage inside the container is not maintained.
~~~
-v <host-path>:<container-path>
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
1. pem과 원하는 파일을 wsl로: mv /mnt/c/users/<윈도우 유저>/desktop/<파일> /home
2. wsl에서 전송: scp -i aws-jenkins.pem -r <파일> <ubuntu이름>@<주소>:/home/ubuntu
~~~
### Add the image in EC2
~~~
docker load -i 파일명.tar
~~~