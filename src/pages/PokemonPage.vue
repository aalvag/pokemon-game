<template>
  <div>
    <h1>Who is that Pokémon?</h1>
    <h1 v-if="!pokemon">Loading...</h1>
    <div v-else>
      <PokemonPicture :pokemonId="pokemon ? pokemon.id : null" :showPokemon="showPokemon" />
      <PokemonOptions :pokemons="pokemonArr" @select-pokemon="checkPokemon($event)" />
    </div>
    <template v-if="showPokemon">
      <h2>
        {{ message }}
      </h2>
      <button @click="newGame">New Game</button>
    </template>
  </div>
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
      pokemon: null,
      showPokemon: false,
      message: "",
    };
  },
  methods: {
    async mixesPokemons() {
      const pokemons = await getPokemonOptions();
      this.pokemonArr = pokemons;
      const ramdomNumber = Math.floor(Math.random() * pokemons.length);
      this.pokemon = pokemons[ramdomNumber];
    },
    checkPokemon(id) {
      this.showPokemon = true;
      if (id === this.pokemon.id) {
        this.message = `Correct, is ${this.pokemon.name}`;
      } else {
        this.message = "Oh, it's not correct";
      }
    },
    newGame() {
      this.showPokemon = false;
      this.message = "";
      this.pokemon = null;
      this.mixesPokemons();
    },
  },
  mounted() {
    this.mixesPokemons();
  },
};
</script>

<style scoped>
button {
  background: #fff;
  border: none;
  color: #3e7ae7;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 36px;
  border-radius: 8px;
  text-transform: uppercase;
  box-shadow: 0px 4px 10px 1px;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

button:hover {
  box-shadow: 0px 4px 10px 4px;
  background-color: #fff6d1;
}
</style>
