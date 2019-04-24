import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-routing-dom"
import "./App.css";

function App(){
    return (
      <Router>
      <div>
        <Route Search exact_path="/" component={Search} />
        <Route Search exact_path="/search" component={Search} />
        <Route Books exact_path="/Saved" component={Saved}  />
  
      </div>
      </Router>
    );
}

export default App;
