import React, { Component, useEffect } from "react";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

import { getSmurf } from "./actions";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(getSmurf());
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList />
        <AddForm />
      </main>
    </div>
  );
};

export default connect()(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.
