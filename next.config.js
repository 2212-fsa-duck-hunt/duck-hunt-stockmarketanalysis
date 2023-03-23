/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: "/watchlist",
        headers: [
          {
            key: "X-Polygon-Edge-ID",
            value: "sample_edge_id",
          },
          {
            key: "X-Polygon-Edge-IP-Address",
            value: "8.8.8.8",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig
