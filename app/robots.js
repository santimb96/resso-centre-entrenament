export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/admin/',
          '/404'
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        disallow: [
          '/api/',
          '/private/',
          '/admin/',
        ],
      },
      {
        userAgent: 'AhrefsBot',
        disallow: '/'
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/'
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/'
      }
    ],
    sitemap: 'https://www.ressocentredentrenament.com/sitemap.xml',
    host: 'https://www.ressocentredentrenament.com',
  }
}