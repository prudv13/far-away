# Far Away Application

[![N|Logo](https://res.cloudinary.com/dqab7rimk/image/upload/v1692941398/codepen/far-away_bcicbb.jpg)](https://faraway-react.netlify.app)

"Far-Away" is a user-friendly travel list management application designed to streamline the packing process. With this app, users can effortlessly compile a comprehensive list of items to take along on their journeys, complete with corresponding quantities. The app offers the convenience of checking off items that have already been packed, as well as the flexibility to remove any unnecessary entries from the packing list. Additionally, users can arrange the packing list in their preferred order for easy organization and have the option to clear the entire list when needed.

## 🔗 Web App Link
```
  https://faraway-react.netlify.app/
```

## Features

- Add quanity of items to be packed for travelling
- Mark and strike through the items that are already packed
- Deleted individual items in the packing list
- Sort the packing list items
- Clear the entire list of packing items
- View information about how much left to be packed in the footer section
- Responsive user interface

## Installation
Install the node modules with npm
```bash
  npm install
```

## Run Project Locally
Install the node modules with npm
```bash
  npm start
```
## Screenshots of the User Interface

![App Screenshot](https://res.cloudinary.com/dqab7rimk/image/upload/v1692942180/codepen/far-away-1_uzwudv.jpg)
![App Screenshot](https://res.cloudinary.com/dqab7rimk/image/upload/v1692942180/codepen/far-away-2_dsdwf8.jpg)
![App Screenshot](https://res.cloudinary.com/dqab7rimk/image/upload/v1692942441/codepen/photo_2023-08-25_11-17-03_gxinla.jpg)
## Dockerizing the react application

To deploy the application made with react in a Docker container -
- Create a Dockerfile.
- Build the Docker image.
- Run the Docker container
- Push the Docker image to Docker Hub

build docker image
```bash
  docker build -t faraway-image .
```

view docker images list
```bash
  docker image ls
```

delete docker image
```bash
  docker image rm <image-id>
```

run docker container
```bash
  docker run -d -p 3000:3000 --name faraway-app faraway-image
```

show running docker container
```bash
  docker ps
```

kill the running docker container
```bash
  docker rm <container-name> -f
```
access the bash terminal of the docker container
```bash
  docker exec -it faraway-app bash
```

[![N|dockerhub](https://res.cloudinary.com/dqab7rimk/image/upload/v1692947494/codepen/faraway-dockerhub_zh2mrs.png)](https://hub.docker.com/r/prudv13/faraway-app/tags)
