/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mtqbluyxjdwcgxgudfxz.supabase.co',
      },
    ],
  },
  output: "export"
};

export default nextConfig;
