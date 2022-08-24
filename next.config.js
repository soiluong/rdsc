/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withMDX(nextConfig);
