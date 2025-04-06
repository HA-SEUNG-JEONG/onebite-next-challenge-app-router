import Searchbar from "./components/SearchBar";

interface SearchLayoutProps {
    children: React.ReactNode;
}

export default function SearchLayout({ children }: SearchLayoutProps) {
    return (
        <div>
            <Searchbar />
            <main>{children}</main>
        </div>
    );
}
