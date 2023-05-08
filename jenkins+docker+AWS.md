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
### Install and execute jenkins container
~~~
docker pull jenkins/jenkins:lts
sudo docker run -d -p 8080:8080 -v /jenkins:/var/jenkins_home --name jenkins -u root jenkins/jenkins:lts
~~~
### if already installed
~~~
docker start jenkins
~~~
### Jenkins page
1. http://address:8080
2. Check the password with: sudo docker logs jenkins
3. Install the recommended plugins.
4. Add github credentials to jenkins (if private repo)
### 5. Integrate jenkins with github webhook
Github
![image](https://user-images.githubusercontent.com/67142421/236819817-cc44373c-91cd-4267-9ced-274b5966f210.png)<br>
![image](https://user-images.githubusercontent.com/67142421/236820133-010056e3-91d1-4f25-bd56-817282f1c786.png)<br>

Jenkins
![image](https://user-images.githubusercontent.com/67142421/236828164-13e27554-890d-4d08-9a84-df47956e7f39.png)<br>
![image](https://user-images.githubusercontent.com/67142421/236828541-483c5b40-2caa-466e-86f2-d9a7648c8a2a.png)<br>

Going forward, any changes pushed to the repository will be pulled into the workspace of Jenkins.

### Copy the public key 
  ~~~
  ssh-keygen
  cd .ssh
  cat id_rsa.pub
  ~~~
