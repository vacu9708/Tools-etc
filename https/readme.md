Let's encrypt(certbot)
## Standalone server (방화벽 설정!!)
sudo certbot certonly --standalone -d <웹 주소>

## Manual server
sudo certbot certonly --manual -d <domain address>

## Common
1. Follow the guide
2. cp -rf -d /etc/letsencrypt/live/ /mnt/c/users/<윈도우 유저>/Desktop/ 혹은 nano로 복사
### How to convert pem to p12 (Spring cannot read pem)
sudo openssl pkcs12 -export -in fullchain.pem -inkey privkey.pem -out keystore.p12 -name ttp -CAfile chain.pem -caname root