import movies from "@/dummy.json";
import MovieItem from "../components/MovieItem";

export default function SearchPage() {
    return (
        <div className="p-4 grid grid-cols-3 gap-2">
            {movies.map((movie) => (
                <MovieItem key={movie.id} {...movie} />
            ))}
        </div>
    );
}
