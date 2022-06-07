/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => ({
    fallback: [{ source: "/produkte", destination: "/products" }],
  }),
};

module.exports = nextConfig;
