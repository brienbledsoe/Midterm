import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Home from './container/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
