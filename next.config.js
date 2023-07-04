
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.fnp.com',
            port: '',
            pathname: '/images/**',
          },
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            pathname: '/600/**',
          },
        ],
      },
}

module.exports = nextConfig