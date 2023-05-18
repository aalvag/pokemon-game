import { getPokemonNames, getPokemonOptions, getPokemons } from "@/helpers/getPokemonOptions";
import { pokemonsMock } from "../mocks/pokemons.mock";

describe("getPokemons", () => {
  it("returns an array of integers with a length of 650", () => {
    const pokemons = getPokemons();
    expect(pokemons.length).toBe(650);
    expect(pokemons[0]).toBe(1);
    expect(pokemons[pokemons.length - 1]).toBe(650);
  });

  it("return an array of 4 elements with names pokemons", async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4]);
    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual(pokemonsMock);
  });

  it("must return an array mixed", async () => {
    const pokemons = await getPokemonOptions();
    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
    ]);
  });
});
