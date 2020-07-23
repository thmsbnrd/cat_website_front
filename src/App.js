import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import NavbarSite from "./components/NavbarSite";
import CardList from "./components/CardList";
import AddCard from "./components/AddCard";

function App() {
  return (
    <div className="App">
      <NavbarSite />
      <Switch>
        <Route exact path="/" component={CardList} />
        <Route path="/add" component={AddCard} />
      </Switch>
    </div>
  );
}

export default App;
