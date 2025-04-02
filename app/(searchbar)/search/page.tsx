export default async function SearchPage({
    searchParams
}: {
    searchParams: Promise<{ q?: string }>;
}) {
    const { q } = await searchParams;
    return (
        <div>
            <h1 className="font-bold mb-8">검색 결과 : {q}</h1>
        </div>
    );
}
