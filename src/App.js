import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />

    <Route exact path ='/'></Route>
    <Route exact path ='/about'></Route>
    <Route exact path ='/contact'></Route>
    
  </div>
);

export default App;
