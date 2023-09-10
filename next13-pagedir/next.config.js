const { createVanillaExtractPlugin } = require("@syfxlin/next-plugin-vanilla-extract");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withVanillaExtract(nextConfig);
