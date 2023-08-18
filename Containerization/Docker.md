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
2. Write and run docker-compose

# docker-compose
Docker Compose is used to define and run a multi-container application. It allows defining a set of containers and their configuration using a YML file, and then starting and stopping them together with a single command.
~~~
docker build -t gateway:gateway -f ./gateway/Dockerfile ./gateway

docker run -d \
  --name gateway \
  -p 8080:8080 \
  --add-host="localhost:host-gateway" \
  gateway:gateway

docker run -d \
  --name redis \
  -p 6379:6379 \
  -v /redis_data:/redis_data \
  redis \
  redis-server --appendonly yes
~~~
### is converted to this docker-compose.yml below
~~~
version: '3'
name: shopping_mall
services:
  gateway:
    build:
      context: ./gateway
      dockerfile: Dockerfile
    image: gateway:gateway
    ports:
      - 8080:8080
    extra_hosts:
      - "localhost:host-gateway"

  redis:
    image: redis
    container_name: redis
    command: redis-server --appendonly yes
    ports:
      - '6379:6379'
    volumes:
      - '/redis_data:/redis_data'
~~~
This can be executed with
~~~
docker-compose down --rmi all -f <file name>
docker-compose up -d -f <file name>
~~~
  
# How to copy docker images to AWS EC2
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

# Other docker commands
### List all containers
~~~
docker ps -a
~~~
### Run all stopped containers
~~~
docker start $(docker ps -a -q --filter "status=exited")
~~~
### List all images
~~~
docker images
~~~
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
### Delete everything
~~~
docker system prune -a
~~~
### Docker volume
Volumes mapped to storage outside the container need to be created because the storage inside the container is not maintained.
~~~
-v <host-path>:<container-path>
~~~
