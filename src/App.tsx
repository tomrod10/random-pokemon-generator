import React from 'react'
import { useState, useEffect } from 'react'

import { fetchPokemon, Pokemon } from "./api/api";
import { getRandomPokemonId } from "./utils/getRandomPokemonId";

import { PokemonCard } from "./components/PokemonCard";



export function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [id, setId] = useState<number>(getRandomPokemonId);
  const [error, setError] = useState<Error | null>({
    name: "",
    message: ""
  });
  const [pokemon, setPokemon] = useState<Pokemon>({
    name: "",
    image: "",
    type: "",
    hp: 0,
    attack: 0,
    defense: 0
  });

  const handleGenerate = () => {
    setId(getRandomPokemonId());
  };

  useEffect(() => {
    let ignore = false;
    setError({
      name: "",
      message: ""
    });
    setIsLoading(true);

    const getPokemon = async () => {
      const { response, error } = await fetchPokemon(id);
      if (ignore) {
        return;
      } else if (error) {
        setError(error);
      } else {
        setPokemon(response);
      }

      setIsLoading(false);
    };
    getPokemon();

    return () => {
      ignore = true;
    };
  }, [id]);

  if (error?.message) {
    return <h1 className='text-2xl text-red-500'>{error?.message}</h1>;
  }

  return (
    <div className="flex flex-col items-center text-indigo-100 p-3">
      <div>
        <h1 className="text-4xl text-center sm:text-left md:text-5xl">Random Pokemon Generator</h1>
      </div>
      <PokemonCard
        pokemon={pokemon}
        isLoading={isLoading}
        handleGenerate={handleGenerate}
      />
    </div>
  );
}