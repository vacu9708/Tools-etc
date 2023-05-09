# Installing Jenkins with Docker(has a problem that things outside the Jenkins image are not accessible)
## Installation of Docker
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

## Install and run the jenkins container
~~~
docker pull jenkins/jenkins:lts
sudo docker run -d -p 8080:8080 -v /jenkins:/var/jenkins_home -u root --name jenkins jenkins/jenkins:lts
~~~

# Installing Jenkins manually
#### [Official installtion](https://www.jenkins.io/doc/book/installing/linux/)
## Installtion of java(on which Jenkins depends)
~~~
$ sudo apt update
$ sudo apt install openjdk-8-jdk -y
~~~
## Installation of Jenkins
~~~
curl -fsSL https://pkg.jenkins.io/debian/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins
~~~
## Open firewall
~~~
sudo ufw allow 8080
sudo ufw allow OpenSSH
sudo ufw enable
~~~
## Start jenkins
~~~
sudo systemctl start jenkins.service
~~~

# Initial setup on the jenkins page
1. http://address:8080
2. Check the password with: sudo docker logs jenkins
3. Install the recommended plugins.
