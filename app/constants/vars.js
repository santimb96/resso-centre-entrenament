const WIDTH_LAYOUT = 'w-full md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw]'

const RESSO_INFO = {
  instagramName: 'resso_ct',
  instagram: 'https://www.instagram.com/resso_ct/',
  tlf: '604845184',
  whatsapp: 'https://wa.me/604845184',
  email: 'mario@ressocentre.es',
  locationName: 'Avda. d\'Antoni Maura, 69, Cas Miot, 07141 Es Pont d\'Inca',
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
    name: 'Talleres',
    href: '#talleres'
  },
  {
    id: 4,
    name: 'Colaboradores',
    href: '#colaboradores'
  },
  {
    id: 5,
    name: 'Horarios',
    href: '#horarios'
  },
  {
    id: 6,
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
    description: 'Plan pensado para quienes se inician en el entrenamiento funcional. Ideal para establecer bases sólidas de movimiento y condición física.',
    includes: [
      '2 entrenos semanales',
      'Acceso a los workshops mensuales',
    ],
    notIncludes: [
      'Entrevista y valoración inicial',
      'Valoración nutricional',
    ],
    price: 90,
    link: 'https://wa.me/+34604845184?text=¡Hola!, estoy interesado en el plan de Iniciación. ¿Podrías darme más información?',
    discount: false,
    originalPrice: 100,
    popular: false,
    premium: false
  },
  {
    id: 2,
    title: 'Avanzado',
    description: 'Para personas con experiencia que buscan llevar su entrenamiento al siguiente nivel con mayor frecuencia y seguimiento.',
    includes: [
      '3 entrenos semanales',
      'Acceso a los workshops mensuales',
      'Entrevista y valoración inicial',
      
    ],
    notIncludes: [
      'Valoración nutricional',
    ],
    price: 100,
    link: 'https://wa.me/+34604845184?text=¡Hola!, estoy interesado en el plan Avanzado. ¿Podrías darme más información?',
    discount: false,
    originalPrice: 110,
    popular: true,
    premium: false
  },
  {
    id: 3,
    title: 'Élite',
    description: 'El plan más completo. Máxima frecuencia de entreno, valoración nutricional y seguimiento fisioterapéutico mensual incluido.',
    includes: [
      '5 entrenos semanales',
      'Acceso a los workshops mensuales',
      'Entrevista y valoración inicial',
      'Valoración nutricional',
    ],
    notIncludes: [],
    price: 140,
    link: 'https://wa.me/+34604845184?text=¡Hola!, estoy interesado en el plan Élite. ¿Podrías darme más información?',
    discount: false,
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
    name: 'La Guarida | Barber - studio',
    image: '/img/sponsors/laGuarida.webp',
    width: 300,
    height: 200,
    href: '#'
  },
  {
    name: 'Carpe Guiem | Nutre tu día',
    image: '/img/sponsors/carpe-guiem.webp',
    width: 300,
    height: 200,
    href: '#'
  },
  {
    name: 'Garden Store | Césped artificial',
    image: '/img/sponsors/garden-store.webp',
    width: 300,
    height: 200,
    href: 'https://www.gardenstore.es/cesped-artificial-mallorca/'
  }
]

export { MENU, PACK_LIST, RESSO_INFO, SERVICES, SPONSORS_LIST, TEACHERS, WIDTH_LAYOUT, WORKSHOPS }
