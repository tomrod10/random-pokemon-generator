export type Pokemon = {
  name: string;
  image: string;
  type: string;
  hp: number;
  attack: number;
  defense: number;
};

type FetchPokemonRes = {
  response: Pokemon;
  error?: Error | null | unknown;
};

export const fetchPokemon = async (id: number): Promise<FetchPokemonRes> => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok === true) {
      throw new Error(`Failed fetch for Pokemon with id: ${id}`);
    };

    const pokemon = await res.json();
    const pokemonData: Pokemon = {
      name: pokemon.name,
      image: pokemon?.sprites?.other?.["official-artwork"]?.front_default,
      type: pokemon.types[0].type.name,
      hp: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat
    }
    return { response: pokemonData, error: null };
  } catch (error) {
    console.error(`${error}`);
    return {
      response: {
        name: "",
        image: "",
        type: "",
        hp: 0,
        attack: 0,
        defense: 0
      },
      error
    };
  }
};
