import React from 'react';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About/About';
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
