import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux'; 
//  Accepts two props: 1.store, 2. children -- makes redux avaliable for your whole applicaiotn via connect()
// connect allows us to grab props in and out of our components

import logo from './logo.svg';
import './App.css';

import MoviesList from './MoviesList'
import MovieDetail from './MovieDetail'

const App = () => {
  return (
    <Provider store={}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </header>
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route exact path="/:id" component={MovieDetail} />
          </Switch>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
