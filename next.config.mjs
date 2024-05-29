/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["github.com", "avatars.githubusercontent.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/u/**",
            }
        ]
    },

    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://localhost:3000/api/:path*",
            },
        ];
    },
    env: {
        MONGO_DB_URI: process.env.MONGO_DB_URI
    }
};

export default nextConfig;
