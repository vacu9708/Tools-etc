### 1. Send the directory that includes files to send and the SSH key to windows ubuntu
mv /mnt/c/users/\<windows username>/desktop/\<directory> /home
### 2. Send files to EC2
scp -i <key_name>.pem -r \<directory to send> ubuntu@\<EC2 address>:/home
