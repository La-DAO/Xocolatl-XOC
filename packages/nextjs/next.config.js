// @ts-check
//const createNextIntlPlugin = require("next-intl/plugin");
//const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");

    const path = require("path");
    config.resolve.alias["@"] = path.resolve(__dirname);

    return config;
  },
  i18n:{
    locales: ["en", "mx"],
    defaultLocale: "en",
  }
};

module.exports = nextConfig;
