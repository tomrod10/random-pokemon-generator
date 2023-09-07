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
  isLoading
}: PokemonCardProps) => {
  return (
    <div>
      {isLoading ? (
        <div className="px-auto my-auto h-[555px]">
          <BarLoader />
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <h2>{pokemon.name}</h2>
          </div>
          <img className="h-[475px]" alt="ditto-png" src={pokemon.image} />
          <div>
            {/* Make the stats a ul element with each stat being an li element */}
            <ul className="flex flex-row justify-between p-4">
              <li>
              Type: {pokemon.type}
              </li>
              <li>
              HP: {pokemon.hp}
              </li>
              <li>
              Attack: {pokemon.attack}
              </li>
              <li>
              Defense: {pokemon.defense}
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
