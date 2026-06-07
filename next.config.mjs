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
            value: 'www.ressocentre.es',
          },
        ],
        destination: 'https://ressocentre.es/:path*',
        permanent: true, // 301 redirect
      },
    ]
  },
}


export default nextConfig
