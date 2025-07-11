const WIDTH_LAYOUT = 'w-full md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw]'

const RESSO_INFO = {
  instagramName: 'resso_ct',
  instagram: 'https://www.instagram.com/resso_ct/',
  tlf: '604845184',
  whatsapp: 'https://wa.me/604845184',
  email: 'mario@ressocentredentrenament.com',
  locationName: 'Avinguda d\'Antoni Maura, 69, Cas Miot, 07141 Es Pont d\'Inca, Illes Balears',
  mapsLink: 'https://maps.app.goo.gl/A3Gnwu5uknGrvUpAA',
  coordinates: { lat: 39.598915606336604, lng: 2.694483325041169 }
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
    description: 'Entrenos con un plan personalizado adaptado a tus objetivos con una supervisión constante.',
    icon: 'Users'
  },
  {
    id: 2,
    title: 'Evaluación inicial',
    description: 'Podrás solicitar una evaluación inicial para determinar tu nivel de condición física y establecer objetivos claros y alcanzables.',
    icon: 'HealthCheck'
  },
  {
    id: 3,
    title: 'Servicios complementarios',
    description: 'Disponemos de un equipo compuesto por un nutricionista y un fisioterapeuta para ayudarte a alcanzar tus metas.',
    icon: 'Services'
  },
  {
    id: 4,
    title: 'Preparados para lo que necesites',
    description: 'Nuestro equipo está preparado para trabajar contigo y ayudarte a alcanzar tus objetivos.',
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
    link: 'https://wa.me/+34604845184?text=¡Hola!, estoy interesado en el plan de Iniciación. ¿Podrías darme más información?',
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
    link: 'https://wa.me/+34604845184?text=¡Hola!, estoy interesado en el plan Avanzado. ¿Podrías darme más información?',
    discount: true,
    originalPrice: 110,
    popular: true,
    premium: false
  },
  {
    id: 3,
    title: 'Élite',
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
    link: 'https://wa.me/+34604845184?text=¡Hola!, estoy interesado en el plan Élite. ¿Podrías darme más información?',
    discount: true,
    originalPrice: 140,
    popular: false,
    premium: true
  }
]

const WORKSHOPS = []

// eslint-disable-next-line no-unused-vars
const WORKSHOPS_MOCK =
  [
    {
      id: 1,
      title: 'Trabaja con tu cuerpo: fundamentos del trabajo físico',
      url: 'trabaja-con-tu-cuerpo-fundamentos-del-trabajo-fisico',
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
      url: 'judo-para-principiantes-fundamentos-del-judo',
      description: 'Taller práctico de judo. Aprenderemos los fundamentos básicos del judo, incluyendo técnicas de takedown, guard, ataque y defensa. El taller incluirá una introducción a las reglas del judo y la importancia de la disciplina y el respeto en el deporte.\n\nLos participantes recibirán una guía de entrenamiento personalizado para continuar su práctica en casa. Ideal para aquellos que desean aprender el deporte de manera segura y respetuosa.',
      date: '20/03/2024',
      startTime: '20:00',
      endTime: '21:30',
      location: '#BeRessò',
      img: '/img/workshops/judoPrincipiantes.webp',
      coordinates: 'https://maps.app.goo.gl/qTSbFygvya8yeynm9',
      teacherId: 1
    }
    // {
    //   id: 3,
    //   title: 'Acondicionamiento físico para el judo',
    //   url: 'acondicionamiento-fisico-para-el-judo',
    //   description: 'Taller práctico de acondicionamiento físico específico para el judo. Aprenderemos ejercicios y rutinas de entrenamiento adaptadas a las necesidades del judoka, incluyendo fuerza, resistencia y flexibilidad.\n\nEl taller incluirá una introducción a la planificación del entrenamiento y la importancia de la prevención de lesiones. Se trabajará en la mejora de la movilidad articular y la activación muscular.\n\nLos participantes recibirán un plan de entrenamiento personalizado para continuar su práctica en casa. Ideal para aquellos que buscan mejorar su rendimiento en el judo.',
    //   date: '05/04/2024',
    //   startTime: '20:00',
    //   endTime: '21:30',
    //   location: '#BeRessò',
    //   img: '/img/workshops/rack.webp',
    //   coordinates: 'https://maps.app.goo.gl/qTSbFygvya8yeynm9',
    //   teacherId: 1
    // },
    // {
    //   id: 4,
    //   title: 'Preparación Física Específica para Judo',
    //   url: 'preparacion-fisica-especifica-para-judo',
    //   description: 'Taller especializado en la preparación física adaptada a las necesidades específicas del judoka. Dirigido tanto a competidores como a practicantes recreativos que deseen mejorar su condición física.\n\nAprenderemos ejercicios específicos para desarrollar la fuerza, resistencia y potencia necesarias en judo. Se incluirán circuitos de entrenamiento funcional y trabajo con pesas adaptado.\n\nTrabajo específico de prevención de lesiones y recuperación activa. Introducción a técnicas de respiración y control corporal para optimizar el rendimiento.\n\nCada participante recibirá un plan de entrenamiento personalizado para continuar su preparación de forma autónoma.',
    //   date: '10/05/2024',
    //   startTime: '20:00',
    //   endTime: '21:30',
    //   location: 'Centro de Alto Rendimiento, Sevilla',
    //   img: '/img/workshops/judoPrincipiantes.webp',
    //   coordinates: 'https://maps.app.goo.gl/qTSbFygvya8yeynm9',
    //   teacherId: 1
    // },
    // {
    //   id: 5,
    //   title: 'Judo y Defensa Personal',
    //   url: 'judo-y-defensa-personal',
    //   description: 'Taller práctico donde exploraremos las aplicaciones del judo en situaciones de defensa personal. Aprenderemos a adaptar las técnicas tradicionales a escenarios realistas de autoprotección.\n\nSe trabajarán situaciones comunes de defensa contra diferentes tipos de agresiones, siempre desde la perspectiva de la seguridad y la proporcionalidad en la respuesta.\n\nIncluiremos técnicas de control y neutralización, así como estrategias de prevención y evaluación de riesgos. Especial énfasis en la parte legal y ética de la defensa personal.\n\nPrácticas con diferentes escenarios y situaciones simuladas para integrar lo aprendido de forma segura y efectiva.',
    //   date: '15/06/2024',
    //   startTime: '20:00',
    //   endTime: '21:30',
    //   location: 'Academia de Seguridad, Zaragoza',
    //   img: '/img/workshops/judoPrincipiantes.webp',
    //   coordinates: 'https://maps.app.goo.gl/qTSbFygvya8yeynm9',
    //   teacherId: 1
    // }
  ]

const TEACHERS = [
  {
    id: 1,
    profileImg: '/img/teachers/mario.png',
    fullname: 'Mario Martín',
    occupation: 'Preparador físico de judo',
    resume: 'Preparador físico de judo con más de 8 años de experiencia compitiendo y formando a deportistas de élite.',
    rrss: [
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/resso_ct/',
      },
      {
        name: 'Whatsapp',
        href: 'https://wa.me/604845184',
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
        href: 'https://www.instagram.com/somosRaw/',
      }
    ]
  }
]

const SPONSORS_LIST = [
  {
    name: 'Pigo',
    image: '/img/sponsors/pigo.webp',
    width: 150,
    height: 150,
    href: '#'
  },
  {
    name: 'La Guarida | Barber - studio',
    image: '/img/sponsors/laGuarida.webp',
    width: 200,
    height: 100,
    href: '#'
  }
]

export { MENU, PACK_LIST, RESSO_INFO, SERVICES, SPONSORS_LIST, TEACHERS, WIDTH_LAYOUT, WORKSHOPS }
