import { Pokemon } from "../interfaces/pokemon-full";
export const pokemonFormatter = ({
  id,
  name,
  sprites,
}: Pokemon): Pick<Pokemon, "id" | "name" | "sprites"> => ({
  id,
  name,
  sprites,
});
