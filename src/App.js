import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';

const Navbar = () => {
   return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active"><Link to="/">Home</Link></a>
          <a className="nav-item nav-link"><Link to="/about">About</Link></a>
        
        </div>
      </div>
    </nav>
   )
}

const App = () => {
  return (
      <div>
        <Router>
          <div>
           <Navbar />
           <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
  )
}

export default App;
