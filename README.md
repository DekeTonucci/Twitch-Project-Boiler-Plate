# Twitch-Project-Boilerplate

A Boilerplate for Twitch Projects needed the new OAUTH process using Passport. -[Source](https://github.com/twitchdev/authentication-node-sample)

Each enviorment is setup with ESLint/Prettier utilizing the AirBnB style. Also, the frontend is setup to use [TailwindCSS](https://tailwindcss.com/).

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Twitch Developers Account

If you do not have a Twitch developers account, you will need to create one to be able to create a Twitch App to obtain a clientid and client secret. Twitch Developers Page: [Link](https://dev.twitch.tv/)

Create a new Twitch app to generate the information needed to fill out the dev.example.js file.  
Copy the Client Id and Client Secret to the example.dev.js file and set the twitch callback url to: http://localhost:3000/auth/twitch/callback

Set <code>MONGO_URI</code> to <code>mongodb://localhost:27017/youre_project_name</code> or where you want to host your mongoDB.  
Set <code>YOUR_SESSION_SECRET</code> to Some Random String of Characters.

Now rename the example.dev.js file to dev.js.

### Installing

Download or clone this repository and follow the install instructions to start the application.  
Inside the main directory install NodeJS Dependencies:

```
npm install
```

Inside the `client` directory install the ReactJS Dependencies:

```
cd client
npm install
```

To run the project, go back to the root directory:

```
npm run dev
```

This will start up both the NodeJS server and the ReactJS server while watching for tailwind.css changes.

## Built With

### Frontend

- ReactJS: [Link](https://reactjs.org/)
- FontAwesome: [Link](https://fontawesome.com)

### Backend

- NodeJS: [Link](https://nodejs.org/en/)
- MongoDB: [Link](https://www.mongodb.com/)
- Passport: [Link](http://www.passportjs.org/)

## Authors

**Christopher 'Deke' Tonucci**- [itsDeke](https://github.com/itsDeke)
