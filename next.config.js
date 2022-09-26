/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

module.exports = {
  reactStrictMode: true,
  target: "experimental-serverless-trace",
  images: {
    domains: ['images.unsplash.com'],
  },
  i18n
}
