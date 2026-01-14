/** @type {import('next').NextConfig} */
const repo = "create-react-app-my-portfolio";

const nextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true },
};

module.exports = nextConfig;

