import React, { Component } from 'react';
import logo from './Pokeball-Icon.png';
import './App.css';
import PokeInfo from './components/PokeInfo/'
import Pokemon from './components/Pokemon'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pokedex-React</h1>
        </header>
        <PokeInfo />
        <Pokemon/>
      </div>
        
    );
  }
}

export default App;
