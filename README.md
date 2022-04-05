# Mission Control Dashboard

An app where you can schedule mission launches to 8 of the potentially habitable Kepler Exoplanets that the Kepler space telescope found during its mission. 
The app also shows a list of previous and upcoming SpaceX launches - launch status, date of launching, mission name, rocket and customers. 
You can also browse the upcoming launches of SpaceX as well as launches that you or other users schedule.

## Implementation details

The Application is built using **MERN** stack (**MongoDB**, **Express.js**, **React.js**, **Node.js**)

The frontend of the application is implemented via **Arwes** - a Sci-Fi UI that uses React under the hood (https://github.com/arwes/arwes)

The backend is built using **Node.js** + **Express.js**

Other technologies that are part of the application:
- **Jest** and **Supertest**: API testing
- **Morgan**: logging of requests to the API
- **PM2**: allowing clustering and load-balancing, monitoring of our app, and hot reloads.
- **MongoDB**: storing and retrieving planets and launches data
- **Mongoose**: object modelling and creating a schema to achieve relational-like database implementation
- **Axios**: getting the SpaceX launch data from https://github.com/r-spacex/SpaceX-API due to some specificities of fetching the data.
- **Dotenv**: managing server secrets
- **GitHub Actions**: CI/CD pipeline
- **Supercharge**: start the MongoDB database for testing during the build pipeline
- **Docker** and **DockerHub**: create images and containers of the application
- **AWS EC2 Instance** to run the application on production
