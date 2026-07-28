import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vxpbtnzumvwxvdyototb.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "automationindustrial.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
