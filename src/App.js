import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import SearchPage from './Pages/SearchPages/SearchPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </ Router>
    </div>
  );
}

export default App;
