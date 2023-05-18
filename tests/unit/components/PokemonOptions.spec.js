import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions.vue";
import { pokemonsMock } from "../mocks/pokemons.mock";

describe("PokemonOptions", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: pokemonsMock,
      },
    });
  });

  it("renders a button for each pokemon in the input array", () => {
    expect(wrapper.findAll("button")).toHaveLength(4);

    expect(wrapper.find("button:nth-child(1)").text()).toEqual(pokemonsMock[0].name);
    expect(wrapper.find("button:nth-child(2)").text()).toEqual(pokemonsMock[1].name);
    expect(wrapper.find("button:nth-child(3)").text()).toEqual(pokemonsMock[2].name);
    expect(wrapper.find("button:nth-child(4)").text()).toEqual(pokemonsMock[3].name);
  });

  it("emits a select-pokemon event with the correct id when a button is clicked", async () => {
    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted()["select-pokemon"]).toBeTruthy();

    // Check if emitted event contains expected values.
    expect(wrapper.emitted()["select-pokemon"][0]).toEqual([1]);
  });
});

