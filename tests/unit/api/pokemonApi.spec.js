import pokemonsApi from "@/api/pokemonApi";

describe("pokemonsApi", () => {
  it("creates an instance of axios with the base URL 'https://pokeapi.co/api/v2/pokemon'", () => {
    expect(pokemonsApi.defaults.baseURL).toBe("https://pokeapi.co/api/v2/pokemon");
  });
});
