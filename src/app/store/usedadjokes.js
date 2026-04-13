import { create } from "zustand";

export const useJokeStore = create((set, get) => ({
  joke: null,
  loading: false,
  favorites: [],

  fetchJoke: async () => {
    set({ loading: true });

    try {
      const res = await fetch(
        "https://sv443.net/jokeapi/v2/joke/Programming",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      const data = await res.json();

    let joke;

if (data.type === "single") {
  joke = {
    id: data.id,
    text: data.joke,
  };
} else {
  joke = {
    id: data.id,
    text: `${data.setup} - ${data.delivery}`,
  };
}

      set({ joke, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }

    // console.log(get().joke);
  },

  addFavorite: () => {
    const { joke, favorites } = get();

    if (!joke) return;

    if (!favorites.includes(joke)) {
      set({
        favorites: [...favorites, joke],
      });
    }
  },
}));