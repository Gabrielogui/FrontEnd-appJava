import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ["raw.githubusercontent.com"], // Adiciona o domínio permitido
  },
};

export default nextConfig;
