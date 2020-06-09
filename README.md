# This is the Hands on Assessment Test Repository

Kindly look into the .env.examples file for the Environment variable to be used for the application setup.

Create a database with a suitable name.
Provide the database URI (connection string data) as requested in the .env.example file.
npm run migrate to create the schema for the database.
npm start to start the application.
npm run test to test the application. 

How to pull the docker image from DockerHub

docker pull oduduu/scello-assessment-test:latest
https://hub.docker.com/repository/registry-1.docker.io/oduduu/scello-assessment-test/tags?page=1

# Challenges.
Setting up the container image network to be able to access local database.