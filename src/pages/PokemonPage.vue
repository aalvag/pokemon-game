<template>
  <h1>Who is that Pokémon?</h1>
  <PokemonPicture :pokemonId="66" :showPokemon="false" />
  <PokemonOptions />
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";

export default {
  name: "PokemonPage",
  components: { PokemonPicture, PokemonOptions },
};
</script>

<style lang="scss" scoped></style>
