/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: ["cdn.discordapp.com", "i.scdn.co"]
   },
   eslint: {
      ignoreDuringBuilds: true
   }
};

export default nextConfig;
