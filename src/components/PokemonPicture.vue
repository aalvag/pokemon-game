<template>
  <div class="pokemon-container">
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      alt="pokemon"
      class="hidden-pokemon"
    />
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      alt="pokemon"
      class="fade-in"
    />
  </div>
</template>

<script>
export default {
  name: "PokemonPicture",
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
.hidden-pokemon {
  filter: brightness(0);
}
img {
  height: 200px;
  position: absolute;
  right: 32%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
