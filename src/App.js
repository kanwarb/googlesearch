import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";

function App(){
    return (
      <Router>
      <div>
        <Route Search exact_path="/" component={Search} />
        <Route Search exact_path="/search" component={Search} />
        <Route Books exact_path="/saved" component={Saved}  />
  
      </div>
      </Router>
    );
}

export default App;
