import MovieItem from "./(searchbar)/components/MovieItem";
import { MovieData } from "@/types";

async function getAllMovies() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie`, {
        cache: "force-cache"
    });
    if (!response.ok) return <div>영화를 불러오는데 실패했습니다.</div>;
    const allMovies: MovieData[] = await response.json();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {allMovies.map((movie) => (
                <MovieItem key={movie.id} {...movie} />
            ))}
        </div>
    );
}

async function getRecommendedMovies() {
    const response = await fetch("http://localhost:12345/movie/random", {
        next: { revalidate: 2 }
    });
    if (!response.ok) return <div>추천 영화를 불러오는데 실패했습니다.</div>;
    const recommendedMovies: MovieData[] = await response.json();
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {recommendedMovies.map((movie) => (
                <MovieItem key={movie.id} {...movie} />
            ))}
        </div>
    );
}

export default function Home() {
    return (
        <div className="flex flex-col gap-8 p-4 md:p-8">
            <section>
                <h3 className="text-2xl font-bold mb-4">모든 영화</h3>
                {getAllMovies()}
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-4">지금 추천하는 영화</h3>

                {getRecommendedMovies()}
            </section>
        </div>
    );
}
