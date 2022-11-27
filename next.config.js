/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com"],
    remotePatterns: [
      {
        hostname: "s3.**.amazonaws.com",
      },
    ],
  },
};
