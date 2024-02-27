/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/infinity-buildworks",
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_PROD: "true",
    },
};

export default nextConfig;
