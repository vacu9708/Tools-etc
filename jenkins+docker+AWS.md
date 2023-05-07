![image](https://user-images.githubusercontent.com/67142421/236676131-64fd9a2f-e1b9-49c1-816e-c469f6f5d62a.png)

# How to install jenkins on EC2
### Install Docker
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
~~~
### Pull jenkins
~~~
docker pull jenkins/jenkins:lts
~~~
### Execute jenkins
~~~
sudo docker run -d -p 8080:8080 -v /jenkins:/var/jenkins_home --name jenkins -u root jenkins/jenkins:lts
~~~
### Jenkins page
1. http://address:8080
2. Check the password with: sudo docker logs jenkins
3. Install the recommended plugins
