export const site = {
  name: "JB Consultorio Dental",
  servicesHref: "#servicios",
  appointmentMessage: "Hola! Quisiera información sobre una cita",
  whatsappContacts: [
    { formattedNumber: "+52 744 588 6161", whatsappNumber: "527445886161" },
    { formattedNumber: "+52 744 233 4294", whatsappNumber: "527442334294" },
  ],
  social: {
    instagram: "https://www.instagram.com/dental.jb/",
    facebook: "https://www.facebook.com/p/JB-Dental-100063535152319/?locale=es_LA",
  },
};

export function getWhatsAppHref(whatsappNumber: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(site.appointmentMessage)}`;
}

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: site.servicesHref },
  { label: "Especialistas", href: "#especialistas" },
  { label: "Casos clínicos", href: "#casos-clinicos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export const aboutContent = {
  eyebrow: "CONÓCENOS",
  heading: "Un espacio dedicado al cuidado de tu sonrisa",
  body: "En JBDental buscamos que cada visita se sienta clara, cercana y cómoda. Nuestro enfoque parte de escuchar tus necesidades y acompañarte con atención profesional durante cada etapa de tu cuidado dental.",
  support: "Cada detalle del consultorio está pensado para ofrecer una experiencia agradable desde tu llegada.",
  principles: [
    {
      label: "Atención cercana",
      text: "Un trato amable para que puedas expresar tus dudas con confianza.",
    },
    {
      label: "Comunicación clara",
      text: "Información sencilla para entender cada paso de tu atención.",
    },
    {
      label: "Cuidado personalizado",
      text: "Acompañamiento atento según las necesidades de cada visita.",
    },
  ],
};

export const facilitiesContent = {
  eyebrow: "NUESTRO ESPACIO",
  heading: "Conoce el consultorio",
  description: "Explora los espacios que forman parte de la experiencia JBDental.",
  images: [
    {
      src: "/area-trabajo.JPG",
      label: "Área de atención",
      alt: "Consultorio dental con escritorio de madera, sillas negras, sillón dental azul y muro con el logotipo de JB Consultorio Dental.",
      width: 4032,
      height: 3024,
      variant: "featured",
    },
    {
      src: "/area-trabajo2.JPG",
      label: "Área de atención",
      alt: "Sillón dental azul frente a un muro azul con láminas de anatomía dental.",
      width: 960,
      height: 1280,
      variant: "portrait",
    },
    {
      src: "/recepcion.JPG",
      label: "Recepción",
      alt: "Recepción del consultorio con escritorio blanco, sillas negras y muro de madera con iluminación cálida.",
      width: 960,
      height: 1280,
      variant: "reception",
      loading: "eager" as const,
    },
  ],
};
