import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  experimental: {
    optimizePackageImports: ['react-icons/fa', 'react-icons/fa6', 'react-icons/rx', 'react-icons/io', 'react-icons/io5', 'react-icons/lu', 'react-icons/md', 'react-icons/pi', 'react-icons/ri', 'react-icons/tb', 'react-icons/bi'],
  },
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
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(woff|woff2|ttf|otf|eot)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}


export default withBundleAnalyzer(nextConfig)
