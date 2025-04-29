const PERSONAL_INFO = {
  description: 'Soy <strong>Mario Martín</strong>, <strong>entrenador</strong> y <strong>preparador físico</strong> con una sólida trayectoria en deportes reglados, principalmente en <strong>judo</strong>, <strong>natación</strong> y <strong>escalada</strong>. \n\nDurante años, he sido responsable de entrenar y preparar a <em>judokas que compiten a nivel nacional</em>, enfocándome en conducirlos a alcanzar su <em>máximo potencial competitivo</em>. \n\nMi experiencia no solo abarca el entrenamiento, sino también el <strong>desarrollo integral del atleta</strong>, incluyendo el <em>análisis biomecánico de técnicas</em>, <em>optimización de rendimiento</em> y <em>corrección de compensaciones posturales</em>.\n\nAdemás de mi labor en el entrenamiento, imparto <strong>charlas y formaciones especializadas</strong> para <strong>maestros de judo</strong> sobre temas clave como <em>preparación física</em> y <em>planificación de temporada</em>. También ofrezco <strong>mentorías para entrenadores</strong>, ayudándoles a perfeccionar sus métodos y mejorar los resultados de sus propios deportistas. Esta combinación de <em>experiencia práctica y educativa</em> me permite contribuir al crecimiento de la comunidad de judo, promoviendo la <strong>excelencia</strong> en cada nivel.'
}

const MENU = [
  {
    id: 1,
    name: '¿Qué es Ressò?',
    href: '#que-es-resso'
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
    popular: false,
    premium: false
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
    popular: true,
    premium: false
  },
  {
    id: 3,
    title: 'Profesional',
    description: 'Este plan está diseñado para competidores de judo que buscan llevar su rendimiento al máximo nivel.',
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
    popular: false,
    premium: true
  }
]

const WORKSHOPS = 
  [
    {
      id: 1,
      title: 'Taller de Judo Infantil',
      description: 'Únete a nuestro taller especial de judo para niños entre 6 y 12 años. Durante esta jornada intensiva, los pequeños aprenderán las técnicas básicas del judo de una manera divertida y segura, siempre bajo la supervisión de instructores certificados.\n\nDesarrollaremos actividades específicas para mejorar el equilibrio, la coordinación y la disciplina. Los participantes aprenderán sobre los valores fundamentales del judo como el respeto, la cortesía y el autocontrol.\n\nSe realizarán ejercicios de calentamiento específicos, juegos adaptados al judo y prácticas de caídas seguras. También introduciremos las primeras técnicas de proyección y control adaptadas al nivel infantil.\n\nAl finalizar el taller, todos los participantes recibirán un diploma de participación y una clase gratuita en nuestro dojo.',
      date: '15/02/2024',
      location: 'Dojo Central Barcelona',
      img: '/img/judoWorkshop.jpg'
    },
    {
      id: 2,
      title: 'Masterclass de Técnicas Avanzadas',
      description: 'Masterclass exclusiva dirigida a judokas de cinturón marrón y negro. En esta sesión intensiva profundizaremos en técnicas avanzadas de competición y sus variantes más efectivas.\n\nNuestro maestro 6º Dan compartirá secretos técnicos y tácticos basados en su experiencia en competiciones internacionales. Se analizarán secuencias de combate y se trabajará en la mejora de los timings de ataque.\n\nDedicaremos un espacio especial al trabajo de transiciones entre técnicas de pie y suelo, perfeccionando las combinaciones más efectivas en competición actual.\n\nConcluiremos con un análisis detallado de videos de competición y una sesión de preguntas y respuestas con el maestro.',
      date: '20/03/2024',
      location: 'Centro Deportivo Olympic, Madrid',
      img: '/img/judoWorkshop.jpg'
    },
    {
      id: 3,
      title: 'Seminario de Kata Tradicional',
      description: 'Seminario especializado en el estudio y perfeccionamiento del Nage-no-kata y Katame-no-kata. Una oportunidad única para profundizar en los aspectos más tradicionales y fundamentales del judo.\n\nBajo la dirección de expertos en kata, trabajaremos la precisión técnica y los principios fundamentales que sustentan cada movimiento. Se explicará el significado histórico y técnico de cada secuencia.\n\nLos participantes recibirán correcciones personalizadas y material didáctico específico para continuar su estudio. Se grabará una demostración individual para posterior análisis.\n\nIdeal para aquellos que se preparan para exámenes de grado o competiciones de kata.',
      date: '05/04/2024',
      location: 'Pabellón Municipal de Deportes, Valencia',
      img: '/img/judoWorkshop.jpg'
    },
    {
      id: 4,
      title: 'Preparación Física Específica para Judo',
      description: 'Taller especializado en la preparación física adaptada a las necesidades específicas del judoka. Dirigido tanto a competidores como a practicantes recreativos que deseen mejorar su condición física.\n\nAprenderemos ejercicios específicos para desarrollar la fuerza, resistencia y potencia necesarias en judo. Se incluirán circuitos de entrenamiento funcional y trabajo con pesas adaptado.\n\nTrabajo específico de prevención de lesiones y recuperación activa. Introducción a técnicas de respiración y control corporal para optimizar el rendimiento.\n\nCada participante recibirá un plan de entrenamiento personalizado para continuar su preparación de forma autónoma.',
      date: '10/05/2024',
      location: 'Centro de Alto Rendimiento, Sevilla',
      img: '/img/judoWorkshop.jpg'
    },
    {
      id: 5,
      title: 'Judo y Defensa Personal',
      description: 'Taller práctico donde exploraremos las aplicaciones del judo en situaciones de defensa personal. Aprenderemos a adaptar las técnicas tradicionales a escenarios realistas de autoprotección.\n\nSe trabajarán situaciones comunes de defensa contra diferentes tipos de agresiones, siempre desde la perspectiva de la seguridad y la proporcionalidad en la respuesta.\n\nIncluiremos técnicas de control y neutralización, así como estrategias de prevención y evaluación de riesgos. Especial énfasis en la parte legal y ética de la defensa personal.\n\nPrácticas con diferentes escenarios y situaciones simuladas para integrar lo aprendido de forma segura y efectiva.',
      date: '15/06/2024',
      location: 'Academia de Seguridad, Zaragoza',
      img: '/img/judoWorkshop.jpg'
    }
  ]

export { MENU, PACK_LIST, PERSONAL_INFO, WORKSHOPS }

