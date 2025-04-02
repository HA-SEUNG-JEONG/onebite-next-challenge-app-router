interface SearchLayoutProps {
    children: React.ReactNode;
}

export default function SearchLayout({ children }: SearchLayoutProps) {
    return (
        <div className="px-4">
            Search Layout
            {children}
        </div>
    );
}
