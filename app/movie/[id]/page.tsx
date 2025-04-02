export default async function MoviePage({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <div className="p-4">
            <h1>movie : {id}</h1>
        </div>
    );
}
