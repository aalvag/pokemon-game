<template>
  <div class="options-container">
    <ul>
      <li>Option 1</li>
      <li>Option 2</li>
      <li>Option 3</li>
      <li>Option 4</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PokemonOptions",
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

