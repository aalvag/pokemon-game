import { shallowMount } from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture.vue";

describe("PokemonPicture componet", () => {
  test("must match the snapshot", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("renders an img tag with the correct src when showPokemon is true", () => {
    const wrapper = shallowMount(PokemonPicture, {
      propsData: {
        pokemonId: 25,
        showPokemon: true,
      },
    });

    const imgTag = wrapper.find("img.fade-in");

    expect(imgTag.exists()).toBe(true); // Check if the image tag exists.
    expect(imgTag.attributes().src).toEqual(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
    ); // Check if the image source matches.
  });

  test("does not render an img tag when showPokemon is false", () => {
    const wrapper = shallowMount(PokemonPicture, {
      propsData: {
        pokemonId: 25,
        showPokemon: false,
      },
    });

    const imgTag = wrapper.find("img.fade-in");

    expect(imgTag.exists()).toBe(false);
  });
});
