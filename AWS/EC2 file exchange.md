### 1. Send the directory that includes files to send and the SSH key to windows ubuntu
mv /mnt/c/users/<windows_username>/desktop/<directory> /home
### 2. Send files to EC2
SSH_name = ubuntu
scp -i <key_name>.pem -r <directory_to_send> <SSH_name>@<EC2_address>:/home
