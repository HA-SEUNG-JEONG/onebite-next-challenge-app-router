import movies from "@/dummy.json";
import Image from "next/image";

export default async function MoviePage({
    params
}: {
    params: { id: string };
}) {
    const movie = movies.find((movie) => movie.id === Number(params.id));
    if (!movie) return <div>영화를 찾을 수 없습니다.</div>;

    const {
        title,
        subTitle,
        company,
        runtime,
        description,
        posterImgUrl,
        releaseDate,
        genres
    } = movie;

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="relative h-[50vh] md:h-[70vh] w-full">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={posterImgUrl}
                        alt={title}
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-end">
                    <div className="relative w-48 h-72 md:w-64 md:h-96 flex-shrink-0 -mb-20 md:mb-0">
                        <Image
                            src={posterImgUrl}
                            alt={title}
                            fill
                            className="object-cover rounded-lg shadow-2xl"
                        />
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4 text-center md:text-left mt-4 md:mt-0">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            {title}
                        </h1>
                        <h2 className="text-lg md:text-xl text-gray-300">
                            {subTitle}
                        </h2>
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 text-sm text-gray-300">
                            <span>{releaseDate}</span>
                            <span className="hidden md:inline">•</span>
                            <span>{genres.join(", ")}</span>
                            <span className="hidden md:inline">•</span>
                            <span>{runtime}분</span>
                        </div>
                        <div className="text-sm text-gray-400">{company}</div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto p-4 md:p-8 mt-24 md:mt-8">
                <h3 className="text-xl font-bold mb-4">줄거리</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
}
