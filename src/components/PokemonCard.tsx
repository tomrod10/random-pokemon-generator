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
  isLoading,
  handleGenerate
}: PokemonCardProps) => {
  const loaderHeight = "0.5em"
  const loaderColor = "rgb(224 231 255"
  return (
    <div className="flex flex-col items-center h-[554px]">
      <div>
        {isLoading ? (
          <div className="h-[32px] flex items-center">
            <BarLoader color={loaderColor} height={loaderHeight}/>
          </div>
        ) : (
          <h2 className="text-2xl text-center">{pokemon.name}</h2>
        )}
      </div>
      <div>
        {isLoading ? (
          <div className="h-[475px] flex items-center">
            <BarLoader color={loaderColor} height={loaderHeight} width="12em"/>
          </div>
        ) : (
          <img className="h-[475px] w-full" alt={`${pokemon.name}-png`} src={pokemon.image} />
        )}
      </div>
      <div className="w-[475px] h-[56px]">
        <ul className="flex flex-row p-4 justify-between">
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
      <button className="bg-indigo-100 hover:bg-indigo-200 text-blue-700 p-1.5 rounded-xl" onClick={handleGenerate}>Generate</button>
    </div>
  );
};
