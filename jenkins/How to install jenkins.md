# Installing Jenkins with Docker(has a problem that things outside the Jenkins image are not accessible)
~~~
docker pull jenkins/jenkins:lts
sudo docker run -d -p 8080:8080 -v /jenkins:/var/jenkins_home -u root --name jenkins jenkins/jenkins:lts
~~~

# Installing Jenkins manually
#### [Official guide](https://www.jenkins.io/doc/book/installing/linux/)
## Install Java(on which Jenkins depends)
~~~
sudo apt update
sudo apt install openjdk-11-jdk -y
~~~
## Install Jenkins
~~~
curl -fsSL https://pkg.jenkins.io/debian/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins -y
~~~

## Change the port
`1.`
~~~
systemctl edit jenkins
~~~
`2.` Add this to the configuration file
~~~
[Service]
Environment="JENKINS_PORT=8079"
~~~

## Open firewall
~~~
sudo ufw enable
sudo ufw allow 8079
sudo ufw allow OpenSSH
~~~

## Initial setup on the Jenkins page
1. http://<host_address>:8079
2. Check the password with: sudo cat /var/lib/jenkins/secrets/initialAdminPassword
3. Install the recommended plugins.

## Grant sudo privilege to Jenkins
Docker requires the sudo privilege
1. visudo /etc/sudoers
2. Append "jenkins ALL=(ALL) NOPASSWD: ALL)" below "# User privilege specification"
3. reboot (using the ubuntu command)
## Start jenkins
~~~
sudo systemctl start jenkins.service
~~~

## Make the Jenkins workspace free from all permissions
This is needed for commands such as the build command ./mvwn clean package
~~~
chmod -R 777 /var/lib/jenkins/workspace
~~~

# How to restart Jenkins and check its status
~~~
sudo systemctl restart jenkins
sudo systemctl status jenkins
~~~
