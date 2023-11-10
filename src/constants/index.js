import {
  mobile,
  backend,
  creator,
  web,
  wordpress,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  // mongodb,
  git,
  figma,
  // docker,
  astra,
  bootstrap,
  // meta,
  // starbucks,
  // tesla,
  isla,
  avport,
  valentina,
  activ,
  // shopify,
  carrent,
  jobit,
  tripguide,
  activpage,
  tictac,
  portafolio1,
  portafolio2,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca de mi",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollador web",
    icon: web,
  },
  {
    title: "Diseñador web",
    icon: mobile,
  },
  {
    title: "Desarrollador React",
    icon: backend,
  },
  {
    title: "Creador de contenido",
    icon: creator,
  },
  {
    title: "Desarrollador WordPress ",
    icon: wordpress,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Astra",
    icon: astra,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Diseñador web Wordpress",
    company_name: "Isla Jet Ski Paquera",
    icon: isla,
    iconBg: "#383E56",
    date: "Noviembre 2023 - Presente",
    points: [
      "Desarrollo de un sistema de reservación de tours para la empresa Isla Jet Ski Paquera.",
      "Implementar un sistema de correo electrónico de SMTP para el envío de notificaciones a los usuarios.",
      "Implementar un sistema de pago a través de la plataforma de Paypal.",
      "Desplegar un sistema de seguridad para la protección de datos sensibles.",
      "Supervisar los controles de versiones de los múltiples plugins alojados en el sitio web.",
      "Rediseñar el sitio web para una mejor experiencia de usuario.",
    ],
  },
  {
    title: "Diseñador web Wordpress",
    company_name: "AvPort Mexico",
    icon: avport,
    iconBg: "#383E56",
    date: "Septiembre 2023 - Presente",
    points: [
      "Desarrollar un sistema de login para el acceso a la plataforma de AvPort Mexico.",
      "Implementar un sistema de correo electrónico para el envío de notificaciones a los usuarios.",
      "Desplegar un sistema de seguridad para la protección de datos sensibles",
      "Supervisar los controles de versiones de los múltiples plugins alojados en el sitio web.",
    ],
  },
  {
    title: "Diseñador web Wordpress",
    company_name: "Valentina Aguado",
    icon: valentina,
    iconBg: "#383E56",
    date: "Septiembre 2023 - Octubre 2023",
    points: [
      "Diseño y desarrollo de un sitio web para la promoción de las obras de la artista plástica Valentina Aguado.",
      "Elaboración de un sistema de galería de imágenes para la visualización de las obras de la artista.",
      "Implementación de un sistema de contacto para la comunicación con los clientes.",
      "SEO para el posicionamiento del sitio web en los motores de búsqueda.",
    ],
  },
  {
    title: "Desarrollador web front end",
    company_name: "Activ Gym",
    icon: activ,
    iconBg: "#383E56",
    date: "Julio 2023 - Septiembre 2023",
    points: [
      "Desarrollo de un sitio web para la promoción de los servicios de Activ Gym.",
      "Implementación de un formulario de contacto para la comunicación con los clientes.",
      "Diseño responsivo para la visualización del sitio web en dispositivos móviles.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial: "Acá va la descripción de Felipe",
    name: "Felipe Cordero",
    designation: "Gerente",
    company: "AVPort",
    image: "/src/assets/company/avport.png",
  },
  {
    testimonial: "Acá va la descripción de Valentina",
    name: "Valentina Aguado",
    designation: "Artista plástica",
    company: "Independiente",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "Acá el de Carlos",
    name: "Carlos Ferrari",
    designation: "Agencia de youtube",
    company: "Independiente",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial: "Acá el de Otro cliente",
    name: "Desconocido",
    designation: "Desconocido",
    company: "Independiente",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Activ Gym",
    description:
      "Página web estática, desarrollada a través de Astra, a partir de gimnasio local, creada a partir de Tailwind CSS, Javascript y HTML, como parte de un proyecto remunerado para un negocio local de la ciudad de Armenia, Quindío.",
    tags: [
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Astra",
        color: "pink-text-gradient",
      },
    ],
    image: activpage,
    source_code_link: "https://github.com/HectorCapera/Activ-Gym",
  },
  {
    name: "Tic Tac Toe",
    description:
      "Juego basado en el clásico tres en raya, desarrollado con React y JavaScript para reforzar los conocimientos y usos de los estados y props, además de la lógica de programación implementada en el juego.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tictac,
    source_code_link: "https://github.com/HectorCapera/Tic-tac-toe",
  },
  {
    name: "Portafolio de editor de video",
    description:
      "Portafolio de editor de video, desarrollado a partir de CSS, HTML y JavaScript, como iniciativa propia para aumentar el alcance a través de plataformas de freelance.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portafolio2,
    source_code_link:
      "https://github.com/HectorCapera/Portafolio-editor-de-video/tree/main",
  },
  {
    name: "Plantillas de sitios estáticos",
    description:
      "Sitio desarrollado para la implementación de tecnologías tales como SAAS, CSS vanilla, HTML y JavaScript a partir de plantillas generadas por parte de HTML5UP.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portafolio1,
    source_code_link: "https://github.com/HectorCapera/Video-Editor-Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
