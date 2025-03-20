import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/digital-portfolio",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
