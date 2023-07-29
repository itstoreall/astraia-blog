const { parsed } = require('dotenv').config({
  path: '.env',
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  env: {
    APOLLO_CLIENT_URL: parsed.APOLLO_CLIENT_URL,
  },
};

module.exports = nextConfig;
