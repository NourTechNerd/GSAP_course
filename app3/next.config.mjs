/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators:false,
    reactStrictMode: false,
    compiler: {
        removeConsole: true, // Removes console logs and errors in production
      },
};

export default nextConfig;
