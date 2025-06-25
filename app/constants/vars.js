const WIDTH_LAYOUT = 'w-full md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw]'

const PERSONAL_INFO = {
  description: 'Soy <strong>Mario Martín</strong>, <strong>entrenador</strong> y <strong>preparador físico</strong> con una sólida trayectoria en deportes reglados, principalmente en <strong>judo</strong>, <strong>natación</strong> y <strong>escalada</strong>. \n\nDurante años, he sido responsable de entrenar y preparar a <em>judokas que compiten a nivel nacional</em>, enfocándome en conducirlos a alcanzar su <em>máximo potencial competitivo</em>. \n\nMi experiencia no solo abarca el entrenamiento, sino también el <strong>desarrollo integral del atleta</strong>, incluyendo el <em>análisis biomecánico de técnicas</em>, <em>optimización de rendimiento</em> y <em>corrección de compensaciones posturales</em>.\n\nAdemás de mi labor en el entrenamiento, imparto <strong>charlas y formaciones especializadas</strong> para <strong>maestros de judo</strong> sobre temas clave como <em>preparación física</em> y <em>planificación de temporada</em>. También ofrezco <strong>mentorías para entrenadores</strong>, ayudándoles a perfeccionar sus métodos y mejorar los resultados de sus propios deportistas. Esta combinación de <em>experiencia práctica y educativa</em> me permite contribuir al crecimiento de la comunidad de judo, promoviendo la <strong>excelencia</strong> en cada nivel.'
}

const MENU = [
  {
    id: 1,
    name: 'Servicios',
    href: '#servicios'
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
  },
  {
    id: 5,
    name: 'Contacto',
    href: '#contacto'
  }
]

const SERVICES = [
  {
    id: 1,
    title: 'Grupos de 4 personas',
    description: 'Podrás disfrutar de una atención personalizada y un enfoque individualizado en cada sesión, ya sea que estés buscando mejorar tu condición física, aprender nuevas habilidades o simplemente disfrutar de una actividad en grupo.',
    icon: 'Users'
  },
  {
    id: 2,
    title: 'Evaluación inicial',
    description: 'Podrás solicitar una evaluación inicial para determinar tu nivel de condición física y establecer objetivos claros y alcanzables. Esta evaluación te permitirá conocer tus fortalezas y áreas de mejora, y te ayudará a diseñar un plan de entrenamiento adaptado a tus necesidades.',
    icon: 'HealthCheck'
  },
  {
    id: 3,
    title: 'Servicios complementarios',
    description: 'Disponemos de servicios complementarios como sesiones de recuperación física y seguimiento nutricional. Estos servicios están diseñados para ayudarte a optimizar tu rendimiento y bienestar general.',
    icon: 'Services'
  },
  {
    id: 4,
    title: 'Preparados para tus objetivos',
    description: 'Ofrecemos entrenamiento personalizado para aquellos que desean un enfoque más específico y personalizado en su entrenamiento. Nuestros entrenadores especializados trabajarán contigo para diseñar un plan de entrenamiento personalizado que se adapte a tus necesidades y objetivos específicos.',
    icon: 'Goal'
  }
]

const PACK_LIST = [
  {
    id: 1,
    title: 'Iniciación',
    description: 'Este plan está diseñado para principiantes que desean adentrarse en el mundo del judo.',
    includes: [
      'Dos entrenos semanales',
      'Acceso a los workshops mensuales',
      'Uso libre del Workspace',
    ],
    notIncludes: [
      'Entrevista y valoración inicial',
      'Valoración nutricional',
      '1 sesión de fisioterapia mensual'
    ],
    price: 80,
    link: 'https://wa.me/+34604845184',
    discount: true,
    originalPrice: 100,
    popular: false,
    premium: false
  },
  {
    id: 2,
    title: 'Avanzado',
    description: 'Este plan está pensado para aquellos que ya tienen experiencia en judo y buscan mejorar sus habilidades.',
    includes: [
      'Dos entrenos semanales',
      'Acceso a los workshops mensuales',
      'Uso libre del Workspace',
      'Entrevista y valoración inicial',
      
    ],
    notIncludes: [
      'Valoración nutricional',
      '1 sesión de fisioterapia mensual'
    ],
    price: 90,
    link: 'https://wa.me/+34604845184',
    discount: true,
    originalPrice: 110,
    popular: true,
    premium: false
  },
  {
    id: 3,
    title: 'Profesional',
    description: 'Este plan está diseñado para competidores de judo que buscan llevar su rendimiento al máximo nivel.',
    includes: [
      'Dos entrenos semanales',
      'Acceso a los workshops mensuales',
      'Uso libre del Workspace',
      'Entrevista y valoración inicial',
      'Valoración nutricional',
      '1 sesión de fisioterapia mensual'
    ],
    notIncludes: [],
    price: 120,
    link: 'https://wa.me/+34604845184',
    discount: true,
    originalPrice: 140,
    popular: false,
    premium: true
  }
]

const WORKSHOPS =
  [
    {
      id: 1,
      title: 'Trabaja con tu cuerpo: fundamentos del trabajo físico',
      description: 'Taller práctico de calistenia y movilidad. Aprenderemos a trabajar con nuestro propio cuerpo, utilizando ejercicios de calistenia y movilidad para mejorar la fuerza, flexibilidad y control corporal.\n\nEl taller incluirá una introducción a los principios de la calistenia, ejercicios básicos y progresiones para cada nivel. Se trabajará en la mejora de la movilidad articular y la activación muscular.\n\nLos participantes recibirán un plan de entrenamiento personalizado para continuar su práctica en casa. Ideal para aquellos que buscan mejorar su condición física sin necesidad de equipamiento adicional.',
      date: '15/02/2024',
      startTime: '20:00',
      endTime: '21:30',
      location: '#somosRaw',
      img: '/img/workshops/calistenia.webp',
      coordinates: 'https://maps.app.goo.gl/qTSbFygvya8yeynm9',
      teacherId: 2
    },
    {
      id: 2,
      title: 'Judo para principiantes: fundamentos del judo',
      description: 'Taller práctico de judo. Aprenderemos los fundamentos básicos del judo, incluyendo técnicas de takedown, guard, ataque y defensa. El taller incluirá una introducción a las reglas del judo y la importancia de la disciplina y el respeto en el deporte.\n\nLos participantes recibirán una guía de entrenamiento personalizado para continuar su práctica en casa. Ideal para aquellos que desean aprender el deporte de manera segura y respetuosa.',
      date: '20/03/2024',
      startTime: '20:00',
      endTime: '21:30',
      location: '#BeRessò',
      img: '/img/workshops/judoPrincipiantes.webp',
      coordinates: 'https://maps.app.goo.gl/qTSbFygvya8yeynm9',
      teacherId: 1
    },
    {
      id: 3,
      title: 'Acondicionamiento físico para el judo',
      description: 'Taller práctico de acondicionamiento físico específico para el judo. Aprenderemos ejercicios y rutinas de entrenamiento adaptadas a las necesidades del judoka, incluyendo fuerza, resistencia y flexibilidad.\n\nEl taller incluirá una introducción a la planificación del entrenamiento y la importancia de la prevención de lesiones. Se trabajará en la mejora de la movilidad articular y la activación muscular.\n\nLos participantes recibirán un plan de entrenamiento personalizado para continuar su práctica en casa. Ideal para aquellos que buscan mejorar su rendimiento en el judo.',
      date: '05/04/2024',
      startTime: '20:00',
      endTime: '21:30',
      location: '#BeRessò',
      img: '/img/workshops/rack.webp',
      coordinates: 'https://maps.app.goo.gl/qTSbFygvya8yeynm9',
      teacherId: 1
    },
    {
      id: 4,
      title: 'Preparación Física Específica para Judo',
      description: 'Taller especializado en la preparación física adaptada a las necesidades específicas del judoka. Dirigido tanto a competidores como a practicantes recreativos que deseen mejorar su condición física.\n\nAprenderemos ejercicios específicos para desarrollar la fuerza, resistencia y potencia necesarias en judo. Se incluirán circuitos de entrenamiento funcional y trabajo con pesas adaptado.\n\nTrabajo específico de prevención de lesiones y recuperación activa. Introducción a técnicas de respiración y control corporal para optimizar el rendimiento.\n\nCada participante recibirá un plan de entrenamiento personalizado para continuar su preparación de forma autónoma.',
      date: '10/05/2024',
      startTime: '20:00',
      endTime: '21:30',
      location: 'Centro de Alto Rendimiento, Sevilla',
      img: '/img/workshops/judoPrincipiantes.webp',
      coordinates: 'https://maps.app.goo.gl/qTSbFygvya8yeynm9',
      teacherId: 1
    },
    {
      id: 5,
      title: 'Judo y Defensa Personal',
      description: 'Taller práctico donde exploraremos las aplicaciones del judo en situaciones de defensa personal. Aprenderemos a adaptar las técnicas tradicionales a escenarios realistas de autoprotección.\n\nSe trabajarán situaciones comunes de defensa contra diferentes tipos de agresiones, siempre desde la perspectiva de la seguridad y la proporcionalidad en la respuesta.\n\nIncluiremos técnicas de control y neutralización, así como estrategias de prevención y evaluación de riesgos. Especial énfasis en la parte legal y ética de la defensa personal.\n\nPrácticas con diferentes escenarios y situaciones simuladas para integrar lo aprendido de forma segura y efectiva.',
      date: '15/06/2024',
      startTime: '20:00',
      endTime: '21:30',
      location: 'Academia de Seguridad, Zaragoza',
      img: '/img/workshops/judoPrincipiantes.webp',
      coordinates: 'https://maps.app.goo.gl/qTSbFygvya8yeynm9',
      teacherId: 1
    }
  ]

const TEACHERS = [
  {
    id: 1,
    profileImg: '/img/teachers/mario.png',
    fullname: 'Mario Martín',
    occupation: 'Preparador físico de judo',
    resume: 'Preparador físico de judo con +10 años de experiencia compitiendo y formando a deportistas de élite.',
    rrss: [
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/mario_martin_judo/',
      },
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/mario.martin.judo',
      },
      {
        name: 'TikTok',
        href: 'https://www.tiktok.com/@mario_martin_judo',
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/@mario_martinjudo',
      }
    ]
  },
  {
    id: 2,
    profileImg: '/img/teachers/erik.png',
    fullname: 'Erik Lemus',
    occupation: 'Entrenador de calistenia en #somosRaw',
    resume: 'Entrenador de calistenia en #somosRaw con +10 años de experiencia compitiendo y formando a deportistas de élite.',
    rrss: [
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/mario_martin_judo/',
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/mario.martin.judo',
      },
      {
        name: 'TikTok',
        link: 'https://www.tiktok.com/@mario_martin_judo',
      },
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/@mario_martinjudo',
      }
    ]
  }
]

export { MENU, PACK_LIST, PERSONAL_INFO, SERVICES, TEACHERS, WIDTH_LAYOUT, WORKSHOPS }
