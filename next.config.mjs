/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    basePath: isProd ? '/nextjs-deploy' : '', // Replace 'nextjs-deploy' with your repo name
    assetPrefix: isProd ? '/nextjs-deploy/' : '',
    trailingSlash: true,
    output: 'export',
    images: { unoptimized: true }
};

export default nextConfig;
