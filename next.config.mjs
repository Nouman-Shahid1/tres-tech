/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "websitedemos.net",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/stripecheckout",
        destination: "https://buy.stripe.com/9B6cMY1zmgar30CaXt48000",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
