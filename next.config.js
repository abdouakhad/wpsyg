module.exports = {
  webpack5: true,
  presets: ["next/babel"],
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: { domains: ["res.cloudinary.com"] },
};
