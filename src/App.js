import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import useCapitalize from "./hooks/useCapitalize";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const poke = useCapitalize("pokemon")

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10").then((res) => {
      setPokemon(res.data.results);
    });
  }, []);

  const displayPokemon = pokemon.map((poke, index) => {
    return <PokeCard name={poke.name} key={index} />;
  });

  return (
    <div className="App">
      <h1>Let's list {poke}!</h1>
      <div className="container">{displayPokemon}</div>
    </div>
  );
}

export default App;
