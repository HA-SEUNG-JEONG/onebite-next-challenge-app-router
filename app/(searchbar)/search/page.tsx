"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const router = useRouter();

    // 홈으로 이동하는 함수
    const goHome = () => {
        router.push("/");
    };

    return (
        <div className="p-4">
            {query ? (
                <h1 className="text-2xl font-bold mb-8">검색 결과: {query}</h1>
            ) : (
                <div>Index Page</div>
            )}
            <button
                className="bg-blue-400 text-white px-4 py-2 rounded-md"
                onClick={goHome}
            >
                홈으로 돌아가기
            </button>
        </div>
    );
}
