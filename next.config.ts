import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['img.clerk.com'], // أضف هنا أي دومين خارجي تريد استخدامه مع next/image
  },
};

export default nextConfig;
