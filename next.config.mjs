import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH,
  env: { basePath: process.env.BASE_PATH },
  images: { formats: ["image/avif", "image/webp"] },
};

export default withNextIntl(nextConfig);
