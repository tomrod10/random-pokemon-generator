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
    <div className="flex flex-col items-center h-[554px] gap-4 sm:gap-0">
      <div>
        {isLoading ? (
          <div className="h-[32px] flex items-center md:h-[36px]">
            <BarLoader color={loaderColor} height={loaderHeight}/>
          </div>
        ) : (
          <h2 className="text-2xl text-center md:text-3xl">{pokemon.name}</h2>
        )}
      </div>
      <div>
        {isLoading ? (
          <div className="h-[375px] flex items-center sm:h-[475px]">
            <BarLoader color={loaderColor} height={loaderHeight} width="12em"/>
          </div>
        ) : (
          <img className="h-[375px] w-full sm:h-[475px]" alt={`${pokemon.name}-png`} src={pokemon.image} />
        )}
      </div>
      <div className="w-[370px] h-[56px] sm:w-[475px]">
        <ul className="flex flex-row flex-wrap p-4 justify-between text-sm sm:text-lg md:text-xl">
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
