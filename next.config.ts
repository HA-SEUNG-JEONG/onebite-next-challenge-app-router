import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                hostname: "search.pstatic.net",
                protocol: "https"
            }
        ]
    }
};

export default nextConfig;
