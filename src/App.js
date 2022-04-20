import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokeCard from './components/PokeCard';

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((res) => {
        console.log(res.data.results)
        setPokemon(res.data.results)
      })
  },[])

  const displayPokemon = pokemon.map((poke, index) => {
    return <PokeCard name={poke.name} />
  })


  return (
    <div className="App">
        <h1>Let's list pokemon!</h1>
        {displayPokemon}
    </div>
  );
}

export default App;
