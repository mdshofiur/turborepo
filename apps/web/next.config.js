module.exports = {
    // output: "standalone",
    experimental: {
      serverActions: true,
    },
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
    },
    async rewrites() {
      return [
        {
          source: '/hello',
          destination: '/test-2',
        },
      ];
    },
};

