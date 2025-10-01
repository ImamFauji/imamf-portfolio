/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'


const nextConfig = {
    // output: 'export',
    basePath: isProd ? '/imamf-portfolio' : '',
  assetPrefix: isProd ? '/imamf-portfolio/' : '',
};

export default nextConfig;
