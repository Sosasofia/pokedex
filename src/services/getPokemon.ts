import { BASE_URL, main_types, colors, LIMITE_POKEMONES } from "./settings";
import { Pokemon, PartialPokemon } from "interfaces/index";

function fetchPokes(page: number) {
  const urlFetch = `${BASE_URL}?limit=${LIMITE_POKEMONES}&offset=${
    page * LIMITE_POKEMONES
  }`;
  const result = fetch(urlFetch)
    .then((res) => res.json())
    .then((res) => {
      const apiResponse = res.results;
      return Promise.all(
        apiResponse.map((poke: Pokemon) => {
          return fetch(poke.url).then((res) => res.json());
        })
      );
    });

  return result;
}

function capitalize(word: string) {
  const name = word.toLowerCase();
  const first = name.charAt(0).toUpperCase();
  const remain = name.slice(1);
  return first + remain;
}

function pokeColor(pokemon: Pokemon) {
  const poke_types = pokemon.types.map((el) => el.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);

  return colors[type as keyof typeof colors];
}

export default function getPokemonList({ page = 0 } = {}) {
  const info = fetchPokes(page).then((data) => {
    const pokesInfo = data.map((poke) => {
      const pokemon: PartialPokemon = {
        id: poke.id,
        height: poke.height,
        weight: poke.weight,
        name: capitalize(poke.name),
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`,
        color: pokeColor(poke),
        hp: poke.stats[0].base_stat,
        exp: poke.base_experience,
      };

      return pokemon;
    });
    return pokesInfo;
  });
  return info;
}
