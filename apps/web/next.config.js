module.exports = {
    experimental: {
        typedRoutes: true,
    },
    // output: "standalone",
    reactStrictMode: true,
    transpilePackages: ["ui"],
    async redirects() {
        return [
          {
            source: '/about',
            destination: '/test',
            permanent: true,
          },
        ]
    }
};

