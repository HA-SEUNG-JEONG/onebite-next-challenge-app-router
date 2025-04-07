import MovieItem from "@/app/(searchbar)/components/MovieItem";
import { MovieData } from "@/types";

export default async function SearchPage({
    searchParams
}: {
    searchParams: Promise<{ q: string }>;
}) {
    const { q } = await searchParams;
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/movie/search?q=${q}`,
        { cache: "force-cache" }
    );
    if (!response.ok) return <div>검색 결과를 불러오는데 실패했습니다.</div>;
    const searchMovieResult: MovieData[] = await response.json();
    return (
        <div className="p-4 grid grid-cols-3 gap-2">
            {searchMovieResult.map((result) => (
                <MovieItem key={result.id} {...result} />
            ))}
        </div>
    );
}
