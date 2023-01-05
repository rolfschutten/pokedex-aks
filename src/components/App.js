import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import './styles/App.css';
import Logo from '../assets/logo.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);
  
        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }

  render() {
    document.title = 'Pokedex App by Schutten.cloud'
    return (
      <div className="App">
        <div className="App-header">
          <img src={Logo} alt="Pokemon" className="Logo" />
          <h1>Schutten.cloud</h1>   
        </div>
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;