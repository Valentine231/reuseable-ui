"use client";

import { useEffect } from "react";
import { useMovieStore } from "@/app/store/usemoviestore";
import SearchBar from "@/app/components/moviesearch";
import MovieGrid from "@/app/components/moviegrid";

export default function Movieapp() {
  const fetchMovies = useMovieStore((state) => state.fetchMovies);

  useEffect(() => {
    fetchMovies(); // default movies
  }, []);

  return (
    <main className="min-h-screen bg-blue-900 text-white font-bold  p-6">
      <h1 className="text-3xl font-bold mb-6">🎬 Movie App</h1>

      <SearchBar />
      <MovieGrid />
    </main>
  );
}