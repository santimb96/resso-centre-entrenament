export default function sitemap() {
  const today = new Date().toISOString().split('T')[0]
  
  return [
    {
      url: 'https://ressocentre.es',
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://ressocentre.es/workshops',
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://ressocentre.es/que-es-resso',
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://ressocentre.es/politica-de-cookies',
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    }
  ]
}
