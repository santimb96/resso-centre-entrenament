/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ressocentredentrenament.com', // without www
          },
        ],
        destination: 'https://www.ressocentredentrenament.com/:path*', // with www
        permanent: true, // 301 redirect
      },
    ]
  },
}


export default nextConfig
