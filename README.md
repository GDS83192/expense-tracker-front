# SMARTSPEND

# Description
SMARTSpend is a budgeting app that helps users remember what they are working towards. Keep your personal goals and budget in one place to remind yourself why you keep a budget!
# Project
[Github Frontend](https://github.com/GDS83192/expense-tracker-front)
[Github Backend](https://github.com/GDS83192/expense-tracker-backend)
[Heroku Deployed Frontend](https://smartspend-front.herokuapp.com/)
[Heroku Deployed Backend](https://smartspend-back.herokuapp.com/)

# Wireframes 
[Figma Wireframes](https://www.figma.com/file/IkOyN7xkaZ5aVdH0Km2rLv/Project-4?node-id=0%3A1)

[ERD](https://docs.google.com/document/d/1-s-itEOSFzR0q66o8vIXPM59oYVDR525jGOl4-v_E8Q/edit)

# User Stories

## MVP

1. As a user I want to be able to add a SMART goal so that I can connect this goal with spending habits
2. As a user I want to be able to log my spending with descriptions about the use of the expense and how it will contribute toward achieving a SMART goal so that I can track whether my expenses are lining up with my goals.
3. As a user I want to be able to create a profile with a brief bio and Avatar image  because adding a personal touch may help me feel more connected with and take personal ownership of my goals.
4. As a user I want to be able to sign in to view my profile and goals so that only I can edit my information unless I choose to provide editing rights to another user.
5. As a user I want to interact with an intuitive and stylish interface so that I enjoy using the application,  or at the very least so that using the application is not a chore.
   

## POST MVP

6. As a user I want to link my bank account to the application so that I can view my balance in real time.
7. As a user I want to be able to categorize my expenses into categories such as necessities vs non-necessities so that i can further understand my budget and spending habits. 
8. As a user I want to be able to share my progress with other users I have identified can view my profile so that I can get feedback and encourage others.
9. As a user I want to be able to use this application on my mobile device and have the experience be the same as when using Desktop so that I can easily track expenses on the go.
10. As a user I want to be able to read budgeting strategies and articles curated from various Financial books blogs and articles so that I can build my strategies using best practices

# Installation / Setup
1. Clone the front and back end repositories
2. Start mongoDB server locally
3. Run npm install in both front and back end directories.
4. Use nodemon command to start backend server
5. Use npm start command to start React frontend.
6. Run as Docker container by running docker-compose build from root directory.
   Adding comment to allow repush

# Features
1. Runs as Docker container 
2. Built using React hooks to make the code DRYer and easier to read
3. Uses JWT for lightweight authentication mechanism.
4. Responsive Design
5. Fragments

- App.js using Hooks 
```
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

import GoalState from './context/goal/GoalState'
import ExpenseState from "./context/expense/ExpenseState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ExpenseState>
        <GoalState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
        </GoalState>
      </ExpenseState>
    </AuthState>
  );
};

export default App;
```

## Technologies

### Frontend

- [React](https://reactjs.org/)
  
### NPM

- [Axios](https://www.npmjs.com/package/axios)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [express=validator](https://www.npmjs.com/package/express-validator)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [config](https://www.npmjs.com/package/config)

### Database

- [MongoDB](https://docs.mongodb.com/manual/)
- [Mongoose](https://www.npmjs.com/package/mongoose)

### Backend

- [Express](https://expressjs.com/)

### Version Control / Deployment

- [Git](https://git-scm.com/doc)
- [Heroku](https://devcenter.heroku.com/categories/reference)


### Approach

| Time    |                                      Task                                      |
| ------- | :----------------------------------------------------------------------------: |
| 1 Day   | Brainstorm ideas, create wireframes, develop outline of project structure |
|0.5 Days | Completing React Hooks and Redux Tutorials
|0.5 Days | Completing Docker Containerization and Plaid API Tutorial
| 1 Day  |                     Initial UX design and front end setup                      |
| 1 Day  |                     Build back end API's                     |
| 1 Day   |            Testing, troubleshooting, refining styling of components            |
| 1/2 Day |                                Final polishing                                 |
| 1/2 Day |                                   Deployment                                   |


# Future Plans
1. Add profile component so users can customize their bio and avatar
2. Implement functionality to allow users to connect to financial accounts for automatic expense logging vs. manual
3. Add interactive elements such as positive messages when a user aa
4. Integrations with other lifestyle apps -- Toggl (Timetracker), Udemy, etc -- work to integrate applications so users can align them with their own personal goals.