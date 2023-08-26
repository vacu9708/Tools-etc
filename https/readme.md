Let's encrypt(certbot)
## Automatic (Open port 80 in the firewal!!!)
sudo certbot certonly --standalone -d <domain_address>

## Manual
1. sudo certbot certonly --manual -d <domain_address>
2. Open the manual server and follow the guide

## Move the certificate
- cp -rL /etc/letsencrypt/live/ /mnt/c/users/<windows_user>/Desktop/
- Or use nano /etc/letsencrypt/live/

## How to convert pem to p12 (Spring cannot read pem)
1. sudo openssl pkcs12 -export -in fullchain.pem -inkey privkey.pem -out keystore.p12 -name ttp -CAfile chain.pem -caname root
2. Enter sudo password