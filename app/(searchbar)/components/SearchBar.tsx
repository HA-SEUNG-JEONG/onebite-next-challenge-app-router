"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Searchbar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState("");

    const q = searchParams.get("q");

    useEffect(() => {
        setSearchTerm(q || "");
    }, [q]);

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const onSubmit = () => {
        if (!searchTerm || q === searchTerm) return;
        router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    };

    const onKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    };

    return (
        <div>
            <input
                value={searchTerm}
                onChange={onChangeSearch}
                className="border-2 border-gray-300 rounded-md py-2 px-4 flex-grow mr-2 mb-2"
                onKeyDown={onKeyDownEnter}
                placeholder="검색어를 입력하세요 ..."
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={onSubmit}
            >
                검색
            </button>
        </div>
    );
}
