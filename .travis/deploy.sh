#!/bin/bash
set -e
#git config --global push.default simple 
#git remote add production ssh://Dev@138.91.114.14/~/BackEndScript
#git push production master 
ssh -i deploy_rsa Dev@138.91.114.14 'cd ~/BackEndScript/Spotify-Backend-Automation/ && git pull && npm install && pm2 start npm --name ci -- start --watch --ignore-watch="node_modules" --name ci'
exit