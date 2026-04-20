import { loadPokemonList } from "./services/loadPokemon.js";

loadPokemonList();

const loadPokemon = document.getElementById("loadPokemon");
loadPokemon.addEventListener("click", loadPokemonList);

/* 
ToDo:
- Suche nach ID implementieren
- Suche nach Name implementieren (Deutsche name eingeben zurück ins englische übersetzen)
- Random treffer implementieren Button und Funktion
- sotieren nach ID und Namen auf- und absteigend
*/