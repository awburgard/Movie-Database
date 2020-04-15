import React from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie'

const movies = [
  {
    id: 1,
    title: 'Star Wars'
  },
  {
    id: 2,
    title: 'Iron Man'
  },
  {
    id: 3,
    title: 'Thor: Ragnarok'
  },
  {
    id: 4,
    title: 'Knives Out'
  },
]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map( movie => <Movie key={movie.id} movie={movie}/> )}
      </div>
    );
  }

}

export default App;
