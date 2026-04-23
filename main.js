import { loadPokemonList } from "./services/loadPokemon.js";
import { loadMorePokemon } from "./services/loadPokemon.js";
import { getInputValueForSearch } from "./utils/inputValueForSearch.js"

function init() {
    loadPokemonList();
    loadMorePokemon();
}

init();
const search = getInputValueForSearch();
console.log(search);
/* 
ToDo:
- Suche nach ID implementieren
- Suche nach Name implementieren (Deutsche name eingeben zurück ins englische übersetzen)
- Random treffer implementieren Button und Funktion
- sotieren nach ID und Namen auf- und absteigend
*/