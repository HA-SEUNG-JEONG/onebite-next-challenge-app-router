import movies from "@/dummy.json";
import MovieItem from "./components/MovieItem";

export default function Home() {
    const recommendedMovies = movies.slice(0, 3);
    const allMovies = movies;

    return (
        <div className="flex flex-col gap-8 p-4 md:p-8">
            <section>
                <h3 className="text-2xl font-bold mb-4">
                    지금 가장 추천하는 영화
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {recommendedMovies.map((movie) => (
                        <MovieItem key={movie.id} {...movie} />
                    ))}
                </div>
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-4">영화 추천</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {allMovies.map((movie) => (
                        <MovieItem key={movie.id} {...movie} />
                    ))}
                </div>
            </section>
        </div>
    );
}
