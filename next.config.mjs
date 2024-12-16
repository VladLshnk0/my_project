/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'norseaatlantic.advanz.no',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'photos.google.com',
                port: '',
                pathname: '*',
            },
            // add protocol for localhost:3000
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**',
            },
            // add protocol for https://norsea.vercel.app
            {
                protocol: 'https',
                hostname: 'norsea.vercel.app',
                port: '',
                pathname: '/**',
            },
           ],
      },
};

export default nextConfig;
