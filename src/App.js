import React from 'react';
import logo from './logo.svg';
import './App.css';

const welcome = 'Welcome to React'

class App extends React.Component {
  state = {
    input: 'Hello'
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  submit = () => {
    console.log(this.text.value)
  }

  render() {
    return (
      <div className="App">
        <input type="text" ref={(input) => this.text = input}/>
        <input type="text" onChange={this.updateInput} value={this.state.input}/>
        <button onClick={this.submit}>Show Value</button>
        <h2>{this.state.input}</h2>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {welcome}
          </a>
        </header>
      </div>
    );
  }

}

export default App;
