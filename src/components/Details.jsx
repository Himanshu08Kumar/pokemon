import React from "react";
import { useState, useEffect } from "react";

const Details = () => {
  const [fetchData, setFetchData] = useState(null);
  const [pokemonData, setPokemonData] = useState([]);
  const [numberValue,setNumberValue] = useState(10)
 
  const val = (e) =>{
    const value = e.target.value;
    setNumberValue(value);
  }
  
  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${numberValue}`
        );
        const data = await response.json();
        setFetchData(data);

        const pokemonDetail = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );
        setPokemonData(pokemonDetail);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUrl();
  }, [numberValue]);

 

  return (
    <>
    <input type="number" onChange={val} value={numberValue}/>
    <div className={`container `}>
      {pokemonData.length > 0 &&
        pokemonData.map((pok, index) => (
          <div key={index} className="items-border">
            <img src={pok.sprites.back_default} 
            width={150} 
            height={150} 
            alt={pok.name}/>
            <h1>{pok.name.toUpperCase()}</h1>
          </div>
        ))}
        </div>
        
    </>
  );
};

export default Details;


