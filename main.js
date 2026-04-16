import { loadPokemonList } from "./services/loadPokemon.js";

loadPokemonList();

const loadPokemon = document.getElementById("loadPokemon");
loadPokemon.addEventListener("click", loadPokemonList);

