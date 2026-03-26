const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/pikachu'

fetch(BASE_URL)
.then(response => {
    return response.json();
})
.then(pokemon => {
    const pic = document.querySelector("img")
    pic.setAttribute("src", pokemon.sprites.front_default)

    const name = document.querySelector(".name")
    name.innerText = pokemon.name

    const id = document.querySelector(".id")
    id.innerText = "Nr. " + pokemon.id

    const types = document.querySelector(".types")
    types.innerText = pokemon.types[0].type.name


    
})

.catch(error => console.log(error))




// Ich will folgende Daten haben:
// Bild
// Nr. + .id
// .name
// .types.name


