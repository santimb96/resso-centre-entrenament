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
            value: 'https://www.ressocentredentrenament.com',
          },
        ],
        destination: 'https://ressocentredentrenament.com/:path*',
        permanent: true, // 301 redirect
      },
    ]
  },
}


export default nextConfig
