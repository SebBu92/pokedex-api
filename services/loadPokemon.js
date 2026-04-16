import { fetchPokemonList } from "../api/pokemonApi.js";
import { renderPokemonList } from "../ui/renderPokemon.js";

let offset = 0;
const limit = 12;

export async function loadPokemonList() {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    const pokemon = await fetchPokemonList(url);

    renderPokemonList(pokemon);
    offset += limit;
}