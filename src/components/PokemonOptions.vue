<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.name }}
      </li>
    </ul>
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
  created() {
    console.log(this.pokemons);
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: #f1f1f1;
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>

