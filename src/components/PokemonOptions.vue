<template>
  <div class="options-container">
    <button v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('select-pokemon', pokemon.id)">
      {{ pokemon.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "PokemonOptions",
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

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

.options-container {
  /* display: flex;
  justify-content: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px; */
}
</style>

