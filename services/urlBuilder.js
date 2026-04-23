import { getInputValueForSearch } from "../utils/inputValueForSearch.js";

let offset = 0;
const limit = 12;

export function buildUrl() {
    const searchParameter = getInputValueForSearch();

    if (searchParameter == "") {
        const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
        offset += limit;
        return url
    }
    else {
        return `https://pokeapi.co/api/v2/pokemon/${searchParameter}`;
    }
}