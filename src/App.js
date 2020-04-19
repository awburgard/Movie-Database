// Packages
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
//  Accepts two props: 1.store, 2. children -- makes redux avaliable for your whole applicaiotn via connect()
// connect allows us to grab props in and out of our components and dispatching actions
// connect is how we get data out of ouf redux and how we perform actions

import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Redeucer
import rootReducer from './rootReducer'

// Statid Assets
import logo from './logo.svg';
import './App.css';

// Components
import MoviesList from './movies/MoviesList'
import MovieDetail from './movies/MovieDetail'
import Toggle from './toggle/Toggle'

const middleware = [logger, thunk]

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware)), // third arg will always be middleware -- so devtools won't usually be there
)

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </header>
          <Toggle />
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
