import PokemonPage from "@/pages/PokemonPage.vue";
import { shallowMount } from "@vue/test-utils";
import { pokemonsMock } from "../mocks/pokemons.mock";

describe("PokemonPage", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test("must match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("calls getPokemonOptions when the component is created", () => {
    const mixesPokemonsSpy = jest.spyOn(PokemonPage.methods, "mixesPokemons");
    shallowMount(PokemonPage);
    expect(mixesPokemonsSpy).toHaveBeenCalled();
  });

  test("must match the snapshot when load pokemons", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonsMock,
          pokemon: pokemonsMock[0],
          showPokemon: false,
          message: "",
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("must show the component PokemonPicture and PokemonOptions", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonsMock,
          pokemon: pokemonsMock[0],
          showPokemon: false,
          message: "",
        };
      },
    });

    const pokemonPicture = wrapper.find("pokemon-picture-stub");
    const pokemonOptions = wrapper.find("pokemon-options-stub");

    expect(pokemonPicture.exists()).toBe(true);
    expect(pokemonOptions.exists()).toBe(true);

    expect(pokemonPicture.attributes("pokemonid")).toBe("1");
    expect(pokemonOptions.attributes("pokemons")).toBeTruthy();
  });

  test("test the method checkPokemon", async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonsMock,
          pokemon: pokemonsMock[0],
          showPokemon: false,
          message: "",
        };
      },
    });

    await wrapper.vm.checkPokemon(1);

    expect(wrapper.find("h2").exists()).toBe(true);
    expect(wrapper.vm.message).toBe(`Correct, is ${pokemonsMock[0].name}`);
    expect(wrapper.vm.showPokemon).toBe(true);

    await wrapper.vm.checkPokemon(20);

    expect(wrapper.vm.message).toBe("Oh, it's not correct");
  });
});
