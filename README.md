# My Wallet - Frontend

## About this Project

This project was developed as part of the Driven Web Full-Stack Bootcamp, a 6-month bootcamp where I started my journey as a web developer.

It serves as the front-end for my-wallet-Project -> the back-end of this project can be found [here](https://github.com/CarlosEFPaiva/Project_my_Wallet_Backend).

My-Wallet is an app where users can save their spending and income, all saved with their own login information and with a friendly interface.

The code for this project was developed in English, but it's interface is currently in Portuguese.

## Functionalities

- Create your own login, using the registration screen. It will save your information in a database and allow you to login wherever you want.

- Sign in using your email and password, and a homescreen will show your name and all your saved entries and a calculated balance for all entries.

- Add a new spending or income, typing it's value and a description. It will automatically be sent to the database and added to your homescreen.

## Getting Started

### Prerequisites

To run this project in the development mode, you'll need to have a basic environment to run a React App.

- Vercel Deploy: This project can be fully experienced by its Vercel deploy, clicking here.

- Run it locally: In order to properly use every feature in this project, it is important to combine it with its backend version. If you plan to run it locally, make sure to clone the back-end and run it as well. The standard port for comunication with the backend is set to 4000 on both projects.

### Running

The following scripts are set for better using of the app:

"start": "REACT_APP_SERVER_URL=https://my-wallet-dev.herokuapp.com react-scripts start",
"start-local": "REACT_APP_SERVER_URL=http://localhost:4000 react-scripts start",
"build": "REACT_APP_SERVER_URL=https://my-wallet-dev.herokuapp.com react-scripts build",
"eject": "react-scripts eject"

- start -> Will start the app and communicate with the Heroku version of the backend and its proper development database.

- start-local -> Will start the app and communicate with a local version of the backend, which is expected to communicate with a proper database.

- build -> command to make a build version of the project.

- eject -> command to eject a running version of the project.

## Built With

- [React](https://reactjs.org/) - Web Framework for javascript
- [ESlint](https://eslint.org/) - Linter
- [Axios](https://www.npmjs.com/package/axios) - Promise bases HTTP client
- [Styled Components](https://www.npmjs.com/package/styled-components) - Creates easily manipulated components for React
- [React Icons](https://www.npmjs.com/package/react-icons) - Access to a variety of icons to be easily implemented
- [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) - Easily creates components to be used while other components are loaded
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Package for setting routes and the communication between them.
- [Sweet Alert 2](https://www.npmjs.com/package/sweetalert2) - Easily creates customizable responses, alerts and pop-ups for browser.
