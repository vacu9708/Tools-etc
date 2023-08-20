### EXPOSE PORTS OF running apps !!
~~~
sudo ufw enable
sudo ufw allow <port>
~~~

### Virtual memory when the system freezes
~~~
sudo dd if=/dev/zero of=/mnt/swapfile bs=1M count=2048
sudo mkswap /mnt/swapfile
sudo swapon /mnt/swapfile
~~~
