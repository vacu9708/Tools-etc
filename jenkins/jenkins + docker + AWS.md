# CI/CD with docker + jenkins + AWS EC2
![image](https://github.com/vacu9708/Tools-etc/assets/67142421/8c279e5c-9ad0-45b9-8656-683fe773d7b9)

# 1. Prerequisites
Install Jenkins, Docker in AWS EC2

# (If AWS free tier)
There is a need to manage the RAM because RAM is very little in AWS free tier<br>
Use this below instead of npm run build
~~~json
"scripts": {
    "build": "GENERATE_SOURCEMAP=false npx react-scripts build"
}
~~~
Allocating virtual memory
~~~
sudo dd if=/dev/zero of=/mnt/swapfile bs=1M count=2048
sudo mkswap /mnt/swapfile
sudo swapon /mnt/swapfile
~~~
Deleting virtual memory
~~~
sudo swapoff -v /mnt/swapfile
sudo rm /mnt/swapfile
~~~

# 2. Integration of jenkins and github
## 1. Configure system
![image](https://github.com/vacu9708/Tools-etc/assets/67142421/9634b5a8-10b3-459b-be11-3b6e752347c3)

## 2. Add github credentials to Jenkins (if private repo)

## 3. Connect the github webhook to Jenkins
### Github
![image](https://user-images.githubusercontent.com/67142421/236819817-cc44373c-91cd-4267-9ced-274b5966f210.png)<br>
![image](https://user-images.githubusercontent.com/67142421/236820133-010056e3-91d1-4f25-bd56-817282f1c786.png)<br>
### Jenkins job configuration
![image](https://github.com/vacu9708/Tools-etc/assets/67142421/636e7a6a-0ff6-45b1-988f-20ec71319ecb)<br>
![image](https://user-images.githubusercontent.com/67142421/236828541-483c5b40-2caa-466e-86f2-d9a7648c8a2a.png)<br>

Going forward, any changes pushed to the repository will be pulled into the workspace of Jenkins automatically.

# 3. Write Dockerfile and docker-compose, and then include them in the root folder of the source

# 4. Write script to create and run the container
Don't forget the permissions!!! (chmod and sudo)
![image](https://github.com/vacu9708/Tools-etc/assets/67142421/24d98cc3-bc75-423c-80b9-60a9b73cab9e)
