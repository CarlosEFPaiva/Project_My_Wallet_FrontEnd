import GlobalReset from "./assets/CSS Components/GlobalReset";
import GlobalStyles from "./assets/CSS Components/GlobalStyles";

import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <GlobalReset />
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
      </Switch>
    </Router>
  );
};
