import { fetchPokemonList } from "./api/pokemonApi.js";
import { renderPokemonList } from "./ui/renderPokemon.js";

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

async function getPokemon() {
    const pokemon = await fetchPokemonList(BASE_URL);
    renderPokemonList(pokemon);
}

getPokemon();