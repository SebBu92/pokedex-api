let offset = 0;
const limit = 12;

export function buildUrl() {
    const searchParameter = document.querySelector(".inputForSearch").value;

    if (searchParameter == "") {
        const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
        console.log(url)
        offset += limit;
        return url
    }
    else {
        console.log(url)
        return `https://pokeapi.co/api/v2/pokemon/5`;
    }
}