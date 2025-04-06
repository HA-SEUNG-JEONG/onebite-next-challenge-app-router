import { MovieData } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function MovieItem(movieData: MovieData) {
    return (
        <Link
            href={`/movie/${movieData.id}`}
            className="w-full block relative group"
        >
            <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                <Image
                    src={movieData.posterImgUrl}
                    alt={movieData.title}
                    width={999}
                    height={999}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 group-hover:bg-opacity-40 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black to-transparent">
                    <h4 className="text-sm md:text-base font-medium truncate">
                        {movieData.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-300 mt-1">
                        {movieData.releaseDate}
                    </p>
                </div>
            </div>
        </Link>
    );
}
