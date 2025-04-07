import { Suspense } from "react";
import Searchbar from "./components/SearchBar";

interface SearchLayoutProps {
    children: React.ReactNode;
}

export default function SearchLayout({ children }: SearchLayoutProps) {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Searchbar />
            </Suspense>
            <main>{children}</main>
        </div>
    );
}
