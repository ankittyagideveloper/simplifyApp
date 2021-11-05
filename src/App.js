import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Menu from "./components/Menu";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/privacyPolicy" exact component={PrivacyPolicy} />
        <Route path="/" exact component={Home} />
        <Route path="/simplifyApp" exact component={Home} />
      </Switch>
    </div>
  );
};
export default App;
