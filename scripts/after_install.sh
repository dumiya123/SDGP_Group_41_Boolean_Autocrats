#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/SDGP_Group_41_Boolean_Autocrats/back-end/deploy.log

echo 'cd /home/ec2-user/myrepo' >> /home/ec2-user/SDGP_Group_41_Boolean_Autocrats/back-end/deploy.log
cd /home/ec2-user/myrepo >> /home/ec2-user/SDGP_Group_41_Boolean_Autocrats/back-end/deploy.log

echo 'npm install' >> /home/ec2-user/SDGP_Group_41_Boolean_Autocrats/back-end/deploy.log 
npm install >> /home/ec2-user/SDGP_Group_41_Boolean_Autocrats/back-end/deploy.log