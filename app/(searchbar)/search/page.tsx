"use client";

import movies from "@/dummy.json";
import MovieItem from "../components/MovieItem";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
    const searchTerm = useSearchParams().get("q");
    const filteredMovies = movies.filter((movie) =>
        movie.title.includes(searchTerm || "")
    );
    return (
        <div className="p-4 grid grid-cols-3 gap-2">
            {filteredMovies.map((movie) => (
                <MovieItem key={movie.id} {...movie} />
            ))}
        </div>
    );
}
