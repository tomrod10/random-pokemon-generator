const LAST_POKEMON_ID: number = 1_010;

export const getRandomPokemonId = (): number => {
  return Math.floor(Math.random() * LAST_POKEMON_ID);
};
