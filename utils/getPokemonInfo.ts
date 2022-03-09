import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";
import { pokemonFormatter } from "./pokemonFormatter";

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);
    return pokemonFormatter(data);
  } catch (error) {
    return null;
  }
};
