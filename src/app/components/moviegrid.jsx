"use client";


import { useMovieStore } from "../store/usemoviestore";
import MovieCard from "./moviecard";

export default function MovieGrid() {
  const { movies, loading } = useMovieStore();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}