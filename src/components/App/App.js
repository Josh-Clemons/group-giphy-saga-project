import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
//TODO: Import component files
import Search from '../Search/Search';
import { Button } from '@material-ui/core';
//placeholder for whatever we end up calling this component
//import Favorites from '../Favorites/Favorites';



function App(props) {
  return (
    <div>
      <header className='app-header'>
        <h1>Giphy Search!</h1>
      </header>
      
      <Router>
        <nav>
          <ul className='links'>
            <li>
              <Link to='/'>Search</Link>
            </li>
            {/* <li>
              <Link to='/favorites'>Favorites</Link>
            </li> */}
          </ul>
        </nav>
        <Route exact path= '/'>
          <Search />
        </Route>
        {/* <Route exact path='favorites'>
          <Favorites />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
