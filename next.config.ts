import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ma.jumia.is",
      },
      {
        protocol: "https",
        hostname: "fdn2.gsmarena.com",
      },
      {
        protocol: "https",
        hostname: "fdn.gsmarena.com",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "p1-ofp.static.pub",
      },
      {
        protocol: "https",
        hostname: "ssl-product-images.www8-hp.com",
      },
      {
        protocol: "https",
        hostname: "dlcdnwebimgs.asus.com",
      },
      {
        protocol: "https",
        hostname: "static.acer.com",
      },
      {
        protocol: "https",
        hostname: "asset.msi.com",
      },
    ],
  },
};

export default nextConfig;
