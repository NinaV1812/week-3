import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components//NavBar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Patientdatabase from "./pages/Patiensdatabase";
import onepatient from "./pages/onepatientinf";
import SignUp from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/doctors" component={Doctors} />
        <Route path="/database" component={Patientdatabase} />
        <Route path="/person/:id" component={onepatient} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
