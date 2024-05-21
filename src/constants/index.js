import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  astra,
  bootstrap,
  avport,
  difovi,
  ailen,
  javier,
  bless,
  digitalzach,
  activ,
  activpage,
  TailwindComponents,
  hectorweb,
  hosting,
  portafolio1,
  portafolio2,
  threejs,
  valentina,
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
    title: "Freelancer",
    icon: backend,
  },
  {
    title: "Creador de contenido",
    icon: creator,
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

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
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
];

const experiences = [
  {
    title: "Diseñador web Wordpress",
    company_name: "Difovi",
    icon: difovi,
    iconBg: "#383E56",
    date: "2024 - Presente",
    points: [
      "Desarrollo e implementación de plantillas PHP en sitios web de clientes.",
      "Diseño de menus y estructuras de navegación para una mejor experiencia de usuario.",
      "Implementación de plugins para la mejora de la funcionalidad de los sitios web.",
      "Desplegar un sistema de seguridad para la protección de datos sensibles.",
      "Supervisar los controles de versiones de los múltiples plugins alojados en el sitio web.",
      "Asignación de un rol específico para cada miembro del equipo de trabajo.",
    ],
  },
  {
    title: "Diseñador web Wordpress",
    company_name: "AvPort Mexico",
    icon: avport,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Desarrollar un sistema de login para el acceso a la plataforma de AvPort Mexico.",
      "Implementar un sistema de correo electrónico para el envío de notificaciones a los usuarios.",
      "Desplegar un sistema de seguridad para la protección de datos sensibles",
      "Supervisar los controles de versiones de los múltiples plugins alojados en el sitio web.",
    ],
  },
  {
    title: "Diseñador web",
    company_name: "Digital Zach",
    icon: digitalzach,
    iconBg: "#383E56",
    date: "2023 - Presente",
    points: [
      "Fundación de la agencia de diseño web y SEO Digital Zach.",
      "Diseño web, asesoramiento personalizado y creación de contenido para redes sociales.",
      "Distribución de roles específicos.",
      "SEO para el posicionamiento del sitio web en los motores de búsqueda.",
    ],
  },
  {
    title: "Freelance web front end",
    company_name: "Activ Gym",
    icon: activ,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Desarrollo de un sitio web para la promoción de los servicios de Activ Gym.",
      "Implementación de un formulario de contacto para la comunicación con los clientes.",
      "Diseño responsivo para la visualización del sitio web en dispositivos móviles.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hector es un excelente diseñador web, muy profesional y comprometido con su trabajo. Lo recomiendo ampliamente.",
    name: "Felipe Cordero",
    designation: "",
    company: "Gerente de AVPort",
    image: avport,
  },
  {
    testimonial:
      "Hector desarrolló 2 sitios web para mi empresa, de manera eficiente y quedé muy satisfecha con su trabajo. Lo recomiendo.",
    name: "Dayanna Huertas",
    designation: "",
    company: "Independiente en La casa de KOA",
    image: valentina,
  },
  {
    testimonial:
      "Hector es un gran profesional, entendio a la perfección los requerimientos y se animo a realizar nuevas propuestas. altamente recomendado",
    name: "Javier Solis ",
    designation: "Gerente",
    company: "JaviSolis",
    image: javier,
  },
  {
    testimonial:
      "Sin duda volvería a escogerlo 1.000 veces más! Atento y sabe muy bien lo que hace. Siempre pendiente de que quedara como teníamos pensado. Súper recomendable",
    name: "Yaumara Toledo ",
    designation: "",
    company: "Abogada / Bless Angels",
    image: bless,
  },
  {
    testimonial: "Excelente trabajo, muy atento y profesional, lo recomiendo",
    name: "Patrick James ",
    designation: "Gerente",
    company: "Gerente de Difovi",
    image: difovi,
  },
  {
    testimonial:
      "Hector was a super good professional! I really liked his work, and I would highly recommend him. ",
    name: "Ailen Reinhardt ",
    designation: "Independiente",
    company: "",
    image: ailen,
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
        name: "Astro",
        color: "pink-text-gradient",
      },
    ],
    image: activpage,
    source_code_link: "https://github.com/HectorCapera/Activ-Gym",
  },
  {
    name: "Tailwind Components",
    description:
      "Página enfocada en la creación de componentes de Tailwind CSS, desarrollada a partir de React, Javascript y Astro, como parte de un proyecto personal para optimizar el ciclo de desarrollo y la creación de componentes reutilizables.",
    tags: [
      {
        name: "React ",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Astro",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "orange-text-gradient",
      },
    ],
    image: TailwindComponents,
    source_code_link: "https://github.com/HectorCapera/Activ-Gym",
  },
  {
    name: "Digital Zach",
    description:
      "Portafolio realizado a partir de Wordpress y Elementor, con el cual manejo y distribuyo el tráfico de clientes a través de diferentes plataformas y redes sociales, ofertando mis servicios como diseñador web en la agencia Digital Zach.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Elementor",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "orange-text-gradient",
      },
    ],
    image: hectorweb,
    source_code_link: "https://github.com/HectorCapera/Tic-tac-toe",
  },
  {
    name: "Portafolio de editor de video",
    description:
      "Portafolio de editor de video, desarrollado a partir de CSS, HTML y JavaScript, como iniciativa propia para aumentar el alcance a través de plataformas de freelance.",
    tags: [
      {
        name: "Astro",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "Javascript",
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
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: portafolio1,
    source_code_link: "https://github.com/HectorCapera/Video-Editor-Portfolio",
  },
  {
    name: "+15 proyectos freelance",
    description:
      "Proyectos concluidos  como diseñador web, en los cuales he implementado tecnologías como Wordpress, Elementor, CSS, HTML, PHP y JavaScript, para la creación de sitios web y landing pages para diferentes empresas y clientes independientes.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Elementor",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "orange-text-gradient",
      },
    ],
    image: hosting,
    source_code_link: "https://github.com/HectorCapera/Tic-tac-toe",
  },
];

export { services, technologies, experiences, testimonials, projects };
