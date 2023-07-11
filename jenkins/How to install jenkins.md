# Installing Jenkins with Docker(has a problem that things outside the Jenkins image are not accessible)
~~~
docker pull jenkins/jenkins:lts
sudo docker run -d -p 8000:8000 -v /jenkins:/var/jenkins_home -u root --name jenkins jenkins/jenkins:lts
~~~

# Installing Jenkins manually
#### [Official guide](https://www.jenkins.io/doc/book/installing/linux/)
## Installtion of java(on which Jenkins depends)
~~~
$ sudo apt update
$ sudo apt install openjdk-11-jdk -y
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
## Grant sudo privilege to Jenkins
1. visudo /etc/sudoers
2. Append: jenkins ALL=(ALL) NOPASSWD: ALL
3. Reboot
## Start jenkins
~~~
sudo systemctl start jenkins.service
~~~

# Initial setup on the jenkins page
1. http://address:8080
2. Check the password with: sudo cat /var/lib/jenkins/secrets/initialAdminPassword
3. Install the recommended plugins.
