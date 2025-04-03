"use client";

import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Searchbar() {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/") {
            setSearchTerm("");
        }
    }, [pathname]);

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const onClickSearch = () => {
        if (searchTerm) {
            router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
        }
    };

    const onKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClickSearch();
        }
    };

    return (
        <div>
            <input
                value={searchTerm}
                onChange={onChangeSearch}
                onKeyDown={onKeyDownEnter}
                className="border-2 border-gray-300 rounded-md py-2 px-4 flex-grow mr-2"
                placeholder="검색어를 입력하세요"
            />
            <button
                onClick={onClickSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                검색
            </button>
        </div>
    );
}
