import { MovieData } from "@/types";
import MovieItem from "@/app/(searchbar)/components/MovieItem";
import { MovieGridSkeleton } from "@/app/(searchbar)/components/MovieSkeleton";
import { delay } from "../utils/delay";
import { Suspense } from "react";

async function getAllMovies() {
    await delay(1500);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie`, {
        cache: "force-cache"
    });
    if (!response.ok) throw new Error("영화를 불러오는데 실패했습니다.");
    const allMovies: MovieData[] = await response.json();

    if (allMovies.length === 0) {
        return (
            <div className="text-center py-8">
                영화를 불러오는데 실패했습니다.
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {allMovies.map((movie) => (
                <MovieItem key={movie.id} {...movie} />
            ))}
        </div>
    );
}

async function getRecommendedMovies() {
    await delay(2000);
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/movie/random`,
        {
            next: { revalidate: 2 }
        }
    );
    if (!response.ok) throw new Error("추천 영화를 불러오는데 실패했습니다.");
    const recommendedMovies: MovieData[] = await response.json();

    if (recommendedMovies.length === 0) {
        return (
            <div className="text-center py-8">
                추천 영화를 불러오는데 실패했습니다.
            </div>
        );
    }
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
                <Suspense fallback={<MovieGridSkeleton cols={3} />}>
                    {getAllMovies()}
                </Suspense>
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-4">지금 추천하는 영화</h3>
                <Suspense fallback={<MovieGridSkeleton cols={3} />}>
                    {getRecommendedMovies()}
                </Suspense>
            </section>
        </div>
    );
}
