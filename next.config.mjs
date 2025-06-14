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
            value: 'www.ressocentredentrenament.com', // with www
          },
        ],
        destination: 'https://ressocentredentrenament.com/:path*', // without www
        permanent: true, // 301 redirect
      },
    ]
  },
}


export default nextConfig
