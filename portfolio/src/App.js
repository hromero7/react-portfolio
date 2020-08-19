import React from 'react';
import './App.css';
import Footer from './components/Footer';
// import NavBar from './components/NavBar';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About/About';
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/portfolio" component={Portfolio} />
      {/* <Footer/> */}
    </div>
    </Router>
  );
}

export default App;
