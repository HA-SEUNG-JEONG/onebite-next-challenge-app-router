export default function MovieSkeleton() {
    return (
        <div className="w-full block relative">
            <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-gray-800 animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50" />
            </div>
        </div>
    );
}

export function MovieGridSkeleton({ cols = 3 }: { cols?: number }) {
    return (
        <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${cols} gap-4`}
        >
            {Array.from({ length: cols * 2 }).map((_, index) => (
                <MovieSkeleton key={index} />
            ))}
        </div>
    );
}
