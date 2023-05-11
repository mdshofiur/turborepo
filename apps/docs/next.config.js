/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    experimental: {
        appDir: true,
        typedRoutes: true,
    },
    images: {
        unoptimized: true,
      },
    output: "export",
    reactStrictMode: true,
    transpilePackages: ["ui"],
    output: "export",
};
