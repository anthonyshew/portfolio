/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        hostname: "s3.**.amazonaws.com",
      },
    ],
  },
};
