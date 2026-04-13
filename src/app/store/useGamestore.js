import { create } from "zustand";

// 🔀 Fisher-Yates Shuffle
const shuffleArray = (array) => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

export const useGameStore = create((set, get) => ({
  pokemons: [],
  score: 0,
  bestScore: 0,
  clicked: [],

  // 🔥 FETCH POKEMON HERE
  fetchPokemons: async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await res.json();

    const pokemonData = data.results.map((poke, index) => ({
      id: index,
      name: poke.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
    }));

    set({
      pokemons: shuffleArray(pokemonData),
    });
  },

  // 🎮 Game Logic
  handleClick: (id) => {
    const { pokemons, score, bestScore, clicked } = get();

    if (clicked.includes(id)) {
      set({
        score: 0,
        clicked: [],
        bestScore: score > bestScore ? score : bestScore,
      });

      alert("Game Over 😭");
    } else {
      set({
        score: score + 1,
        clicked: [...clicked, id],
      });
    }

    set({
      pokemons: shuffleArray(pokemons),
    });
  },
}));