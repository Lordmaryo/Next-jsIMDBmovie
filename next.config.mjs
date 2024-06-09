/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
    ],
  },

  env: {
    NEXT_PUBLIC_API_KEY: "078c567caf4a3e126bb54bf55e04a395",
  },
};

export default nextConfig;
