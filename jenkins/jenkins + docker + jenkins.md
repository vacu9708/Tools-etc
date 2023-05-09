# CI/CD with docker + jenkins + AWS EC2  
# 1. Prerequisites
Install Jenkins, Docker in AWS EC2

# 2. Integration of jenkins and github
### 1. Add github credentials to Jenkins (if private repo)
### 2. Connect the github webhook to Jenkins
#### Github
![image](https://user-images.githubusercontent.com/67142421/236819817-cc44373c-91cd-4267-9ced-274b5966f210.png)<br>
![image](https://user-images.githubusercontent.com/67142421/236820133-010056e3-91d1-4f25-bd56-817282f1c786.png)<br>
#### Jenkins job configuration
![image](https://github.com/vacu9708/Tools-etc/assets/67142421/636e7a6a-0ff6-45b1-988f-20ec71319ecb)<br>
![image](https://user-images.githubusercontent.com/67142421/236828541-483c5b40-2caa-466e-86f2-d9a7648c8a2a.png)<br>

Going forward, any changes pushed to the repository will be pulled into the workspace of Jenkins automatically.

# 3. Write Dockerfile and docker-compose, and then include them in the root folder of the source

# 4. Write script to create and run the container on github push
![image](https://github.com/vacu9708/Tools-etc/assets/67142421/6565c76c-88a5-41d7-8915-5b75f17d084f)
