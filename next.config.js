/** @type {import('next').NextConfig} */

const basePath = process.env.UI_BASE_PATH;

const nextConfig = {
  basePath: `/${basePath}`,
  reactStrictMode: true,
};

module.exports = nextConfig;
