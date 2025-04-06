import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "ONEBITE CINEMA",
    description: "ONEBITE CINEMA"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <div className=" min-h-screen bg-black text-white p-4">
                    <header className="text-[rgb(229,9,20)] text-2xl font-bold">
                        <Link href="/">ONEBITE CINEMA</Link>
                    </header>
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
