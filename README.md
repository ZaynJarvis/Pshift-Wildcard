# WildCard

This is the prototype of Wildcard app for DBS Pshift Phase2. The prototype has been containerized and deployed on AWS, and is live [here](localhost)!

Wildcard is the next-gen free-lancing platform that utilizes AI and big data to boost job discovery, manage milestones to ensure work quality, allow timely payments, resolve disputes, provide insurance and tax filing for freelancers via Smart Contract to bring a peace of mind for clients and freelancers.

## Requirements

- Node.js
- npm
- Yarn

## Download and launch the app locally

1. Download the code

```
git clone https://github.com/ZaynJarvis/Pshift-Wildcard.git
cd Pshift-Wildcard
```

2. launch the app

```
sudo make
```

You have brought the app live on your local workstation! You can access it at `localhost:3000`.

Note that the Wildcard application has been fulled containerized with Docker Container and Docker Service. For details on the container configuration, please refer to the `docker-compose.yml` and `Dockerfile` files.

## Tech stack

* Angular Frontend
* Node.js (typescript) Backend
* Redis in-memory Database
* Docker - Docker Compose Containerization
* Travis CI/CD automation
* AWS EC2 Deployment
* tslint - eslint - Prettier Code style linting
* Netlify Frontend development testing

## Demo

Reach demo website at [pshift.zaynjarvis.com](http://pshift.zaynjarvis.com)

