# CI/CD with docker + jenkins + AWS EC2  


## Integrate jenkins with github
### 1. Add github credentials to jenkins (if private repo)
### 2. Set up the github webhook
Github
![image](https://user-images.githubusercontent.com/67142421/236819817-cc44373c-91cd-4267-9ced-274b5966f210.png)<br>
![image](https://user-images.githubusercontent.com/67142421/236820133-010056e3-91d1-4f25-bd56-817282f1c786.png)<br>

Jenkins
![image](https://user-images.githubusercontent.com/67142421/236828164-13e27554-890d-4d08-9a84-df47956e7f39.png)<br>
![image](https://user-images.githubusercontent.com/67142421/236828541-483c5b40-2caa-466e-86f2-d9a7648c8a2a.png)<br>

Going forward, any changes pushed to the repository will be pulled into the workspace of Jenkins.

## Send files to EC2 and run the container
Publish over SSH plugin has been deprecated
