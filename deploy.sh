ssh -o StrictHostKeyChecking=no -i ~/.ssh/travis ubuntu@$IP <<EOF
  cd ~/Pshift-Wildcard
  git checkout .
  git pull -f origin master
  make
EOF
