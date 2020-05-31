#!/bin/bash
#set -e
#git config --global push.default simple 
#git remote add production ssh://Dev@138.91.114.14/~/BackEndScript
#git push production master 
ssh -i ~/.ssh/deploy_rsa Dev@138.91.114.14 'cd ~/BackEndScript/Spotify-Backend-Automation/ && git clean  -d  -f . &&git reset --hard && git pull && cp service-account-file.json ../service-account-file.json && npm install && pm2 reload Backend'
exit
