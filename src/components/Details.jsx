import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search";

const Details = () => {
  const [fetchData, setFetchData] = useState(null);
  const [pokemonData, setPokemonData] = useState([]);
  const [numberValue,setNumberValue] = useState(10)
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);


  const handleSearchChange = (e) =>{
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if(query === ''){
      setFilteredData(pokemonData);
    }else{
      const filtered = pokemonData.filter((pokemon)=>
        pokemon.name.toLowerCase().includes(query)
      );
      setFilteredData(filtered);
    }
  }
 
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
        setFilteredData(pokemonDetail);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUrl();
  }, [numberValue]);

 

  return (
    <>
    <div className="heading">
    <Search searchQuery={searchQuery} onSearchChange={handleSearchChange} />
    <input type="number" onChange={val} value={numberValue}/>
    </div>
    <div className={`container `}>
      {filteredData.length > 0 ?
        filteredData.map((pok, index) => (
          <div key={index} className="items-border">
            <img src={pok.sprites.back_default} 
            width={150} 
            height={150} 
            alt={pok.name}/>
            <h1 className="text">{pok.name.toUpperCase()}</h1>
          </div>
        )):
        (<h1>No Pokemon Found!!!</h1>)}
        </div>
        
    </>
  );
};

export default Details;


