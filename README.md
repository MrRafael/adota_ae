

<h1 align="center">
    PetFinder 
</h1>

<h3 align="center">
    Getting a house for homeless pets
</h3>

<h2 id="how-to-start"> How to Start </h2>

This project is divided into two parts:
1. <a href="#how-to-start">Backend</a>
2. <a href="#how-to-start">Frontend</a>


<h2 id="how-to-start"> Backend </h2>

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) and [PostgreSQL](https://www.postgresql.org/) (you also couldcreate a free account on [ElephantSQL](https://www.elephantsql.com/)).
In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

#### Running

Open the [envfile](https://github.com/MrRafael/petfinder/blob/master/server/.env) and set your db config

```bash

# Go to the floder
$ cd server

# install depencies
$ npm install

# Run the migrations
$npx sequelize db:migrate

# Run the server
$npm run dev

#  go http://localhost:3333 

```

#### Tests

```bash

# On  the server floder
$npm test

```

####  Tech Stack
The following tools were used in the construction of the server project:

#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Server**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**
-   **[PostgreSQL](https://www.postgresql.org/)**
-   **[bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme)**
-   **[dotenv](https://github.com/motdotla/dotenv#readme)**
-   **[factory-girl](https://github.com/simonexmachina/factory-girl/tree/f7ec9d5004021ff1334ab9440e9b5cc4fd1a18b0)**
-   **[faker](https://github.com/Marak/Faker.js#readme)**
-   **[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)**
-   **[sequelize](https://sequelize.org/)**
-   **[jest](https://jestjs.io/)**
-   **[supertest](https://github.com/visionmedia/supertest#readme)**


---

<h2 id="how-to-start"> Frontend </h2>

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

#### Running

```bash

# Go to the floder
$ cd web

# install depencies
$ npm install

# Run the web server
$ npm start

# The Front-End will be avaliable on gate:3000 - go http://localhost:3000 

```

####  Tech Stack
The following tools were used in the construction of the project:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[Axios](https://github.com/axios/axios)**
-   **[cep-promise](https://github.com/filipedeschamps/cep-promise)**



