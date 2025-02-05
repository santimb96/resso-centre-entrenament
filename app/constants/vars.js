const MENU = [
  {
    id: 1,
    name: '¿Quién soy?',
    href: '#quien-soy'
  },
  {
    id: 2,
    name: 'Planes',
    href: '#planes'
  },
  {
    id: 3,
    name: 'Workshops',
    href: '#workshops'
  },
  {
    id: 4,
    name: 'Patrocinadores',
    href: '#patrocinadores'
  }
]

const PACK_LIST = [
  {
    id: 1,
    title: 'Iniciación',
    description: 'Este plan está diseñado para principiantes que desean adentrarse en el mundo del judo.',
    includes: [
      'Clases grupales 2 veces por semana',
      'Acceso a material didáctico básico',
      'Sesión de evaluación inicial',
      'Asesoramiento técnico básico',
      'Acceso a la comunidad de judo'
    ],
    notIncludes: [
      'Clases personalizadas',
      'Acceso a entrenamientos avanzados',
      'Sesiones de recuperación física',
      'Entrenamiento específico para competición',
      'Acceso a seminarios especializados',
      'Seguimiento nutricional'
    ],
    price: 49.99,
    link: 'https://academiajudo.com/plan-iniciacion',
    discount: false,
    popular: false
  },
  {
    id: 2,
    title: 'Avanzado',
    description: 'Este plan está pensado para aquellos que ya tienen experiencia en judo y buscan mejorar sus habilidades.',
    includes: [
      'Clases grupales 2 veces por semana',
      'Acceso a material didáctico básico',
      'Sesión de evaluación inicial',
      'Asesoramiento técnico básico',
      'Acceso a la comunidad de judo',
      'Clases personalizadas 1 vez por semana',
      'Acceso a entrenamientos avanzados',
      'Sesiones de recuperación física'
    ],
    notIncludes: [
      'Entrenamiento específico para competición',
      'Acceso a seminarios especializados',
      'Seguimiento nutricional'
    ],
    price: 79.99,
    link: 'https://academiajudo.com/plan-intermedio',
    discount: false,
    popular: true // Este es el plan popular
  },
  {
    id: 3,
    title: 'Profesional',
    description: 'Este plan está diseñado para competidores y expertos en judo que buscan llevar su rendimiento al máximo nivel.',
    includes: [
      'Clases grupales 2 veces por semana',
      'Acceso a material didáctico básico',
      'Sesión de evaluación inicial',
      'Asesoramiento técnico básico',
      'Acceso a la comunidad de judo',
      'Clases personalizadas 1 vez por semana',
      'Acceso a entrenamientos avanzados',
      'Sesiones de recuperación física',
      'Entrenamiento específico para competición',
      'Acceso a seminarios especializados',
      'Seguimiento nutricional'
    ],
    notIncludes: [],
    price: 119.99,
    link: 'https://academiajudo.com/plan-avanzado',
    discount: false,
    popular: false
  }
]

export { MENU, PACK_LIST }

