const toggleFavorite = (id: number) => {
  let favorites = pokemons();

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => pokemons().includes(id);

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

const localFavorites = { existInFavorites, toggleFavorite, pokemons };

export default localFavorites;
