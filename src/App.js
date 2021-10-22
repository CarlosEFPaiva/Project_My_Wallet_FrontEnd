import GlobalReset from "./assets/CSS Components/GlobalReset";
import GlobalStyles from "./assets/CSS Components/GlobalStyles";

import SignInPage from "./pages/SignIn/SignIn";
import SignUpPage from "./pages/SignUp/SignUp";
import Homescreen from "./pages/Homescreen/HomeScreen";
import NewEntry from "./pages/NewEntry/NewEntry";

import UserDataContext from "./contexts/userDataContext";
import ContactServerContext from "./contexts/ContactServerContext";
import { getTokenFromLocalStorage } from "./Utils/LocalStorageUtils";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";


export default function App() {
  const [userData, setUserData] = useState({name: "", token: getTokenFromLocalStorage(), entries:[]});
  const [isContactingServer, setIsContactingServer] = useState(false);

  return (
    <Router>
      <GlobalReset />
      <GlobalStyles />
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <ContactServerContext.Provider value = {{isContactingServer, setIsContactingServer}}>
          <Switch>
            <Route exact path="/"> <SignInPage /> </Route>
            <Route exact path="/sign-up"> <SignUpPage /> </Route>
            <Route exact path="/homescreen"> <Homescreen /> </Route>
            <Route exact path="/new-deposit"> <NewEntry type = "deposit" /> </Route>
            <Route exact path="/new-withdraw"> <NewEntry type = "withdraw" /> </Route>
          </Switch>
        </ContactServerContext.Provider>
      </UserDataContext.Provider>
    </Router>
  );
};
