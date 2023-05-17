import pokemonsApi from "@/api/pokemonApi";

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));
  return pokemonsArr.map((_, index) => index + 1);
};

export const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonNames(mixedPokemons.slice(0, 4));
  return pokemons;
};

const getPokemonNames = async ([a, b, c, d] = []) => {
  const res = await Promise.all([
    pokemonsApi.get(`/${a}`),
    pokemonsApi.get(`/${b}`),
    pokemonsApi.get(`/${c}`),
    pokemonsApi.get(`/${d}`),
  ]);
  return res.map((pokemon) => {
    return {
      name: pokemon.data.name,
      id: pokemon.data.id,
    };
  });
};
