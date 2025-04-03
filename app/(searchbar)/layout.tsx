import SearchBar from "./components/SearchBar";

interface SearchLayoutProps {
    children: React.ReactNode;
}

export default function SearchLayout({ children }: SearchLayoutProps) {
    return (
        <div className="container mx-auto px-4">
            <header className="py-4 border-b mb-4">
                <SearchBar />
            </header>
            <main>{children}</main>
        </div>
    );
}
