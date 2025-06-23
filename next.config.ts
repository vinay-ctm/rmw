import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias || {}),
        "@": path.resolve(__dirname, "src"),
      },
    };
    return config;
  },
};

export default nextConfig;
