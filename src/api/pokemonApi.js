import axios from "axios";

const pokemonsApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export default pokemonsApi;
