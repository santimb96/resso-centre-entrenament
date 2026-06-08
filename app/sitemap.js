const TODAY = new Date('2025-06-08')

export default function sitemap() {
  return [
    {
      url: 'https://ressocentre.es',
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://ressocentre.es/workshops',
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://ressocentre.es/que-es-resso',
      lastModified: TODAY,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://ressocentre.es/politica-de-cookies',
      lastModified: TODAY,
      changeFrequency: 'yearly',
      priority: 0.3,
    }
  ]
}
