import React from "react";
import { BarLoader } from "react-spinners";

import { Pokemon } from "../api/api";

type PokemonCardProps = {
  pokemon: Pokemon;
  handleGenerate: () => void;
  isLoading: boolean;
};

export const PokemonCard = ({
  pokemon,
  handleGenerate,
  isLoading
}: PokemonCardProps) => {
  return (
    <div>
      {isLoading ? (
        <BarLoader />
      ) : (
        <>
          <div>
            <h2>{pokemon.name}</h2>
          </div>
          <img alt="ditto-png" src={pokemon.image} />
          <div>
            {/* Make the stats a ul element with each stat being an li element */}
            {`Type: ${pokemon.type} HP: ${pokemon.hp} Attack: ${pokemon.attack} Defense: ${pokemon.defense}`}
          </div>
          <div>
            <button onClick={handleGenerate}>Generate</button>
          </div>
        </>
      )}
    </div>
  );
};
