// `npm run build:pages` (or GITHUB_PAGES=true) builds a static copy into out/ for https://vaishak2k6.github.io/APAAR-Satya/
const isPages = process.env.GITHUB_PAGES === "true" || process.env.npm_lifecycle_event === "build:pages";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(isPages && {
    output: "export",
    basePath: "/APAAR-Satya",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
