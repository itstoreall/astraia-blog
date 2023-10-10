/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    ipfsLink: process.env.IPFS_LINK,
    ipfsImgName: process.env.IPFS_IMG_NAME,
  },
};

module.exports = nextConfig;
