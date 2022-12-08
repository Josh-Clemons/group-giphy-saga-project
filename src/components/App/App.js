import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
//TODO: Import component files
import Search from '../Search/Search';
import { Button } from '@material-ui/core';
import FavoriteView from '../FavoriteView/FavoriteView';




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
            <li>
              <Link to='/favorite'>Favorites</Link>
            </li>
          </ul>
        </nav>
        <Route exact path= '/'>
          <Search />
        </Route>
        <Route exact path='/favorite'>
          <FavoriteView />
        </Route>
      </Router>
    </div>
  );
}

export default App;
