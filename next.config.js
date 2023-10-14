/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    ipfsLink: process.env.IPFS_LINK,
  },
};

module.exports = nextConfig;
