<template>
  <h1>Who is that Pokémon?</h1>
  <PokemonPicture :pokemonId="66" :showPokemon="false" />
  <PokemonOptions :pokemons="pokemonArr" />
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import { getPokemonOptions } from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr: [],
    };
  },
  methods: {
    async mixesPokemons() {
      const pokemons = await getPokemonOptions();
      this.pokemonArr = pokemons;
    },
  },
  mounted() {
    this.mixesPokemons();
  },
};
</script>

<style lang="scss" scoped></style>
