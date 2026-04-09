import { create } from "zustand";

export const useMovieStore = create((set) => ({
  movies: [],
  loading: false,
  query: "batman",

  fetchMovies: async (search = "batman") => {
    set({ loading: true });

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${search}`
      );
      const data = await res.json();

      set({
        movies: data.Search || [],
        loading: false,
        query: search,
      });
    } catch (err) {
      console.error(err);
      set({ loading: false });
    }
  },
}));