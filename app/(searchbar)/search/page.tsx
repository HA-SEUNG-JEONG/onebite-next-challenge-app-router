import MovieItem from "@/app/(searchbar)/components/MovieItem";
import { delay } from "@/app/utils/delay";
import { MovieData } from "@/types";
import { Suspense } from "react";
import { MovieGridSkeleton } from "../components/MovieSkeleton";

async function SearchResults({ q }: { q: string }) {
    await delay(2000);
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/movie/search?q=${q}`,
        { cache: "no-store" }
    );
    if (!response.ok) throw new Error("검색 결과를 불러오는데 실패했습니다.");
    const searchMovieResult: MovieData[] = await response.json();

    if (searchMovieResult.length === 0) {
        return <div className="text-center py-8">검색 결과가 없습니다.</div>;
    }

    return (
        <div className="grid grid-cols-3 gap-2">
            {searchMovieResult.map((result) => (
                <MovieItem key={result.id} {...result} />
            ))}
        </div>
    );
}

export default function SearchPage({
    searchParams
}: {
    searchParams: { q: string };
}) {
    const q = searchParams.q || "";

    return (
        <div className="p-4">
            <Suspense key={q} fallback={<MovieGridSkeleton cols={3} />}>
                <SearchResults q={q} />
            </Suspense>
        </div>
    );
}
