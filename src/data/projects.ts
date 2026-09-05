interface CaseStudy {
  title: string;
  role: string;
  context: string;
  decision: string;
  result: string;
  tags: string[];
}

interface SideProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Lanzamiento de un mercado internacional',
    role: 'i18n en tienda headless',
    context:
      'Apertura de un nuevo mercado sobre una tienda headless ya en producción: el catálogo y la interfaz debían servirse en un nuevo idioma sin duplicar el storefront.',
    decision:
      'Monté el pipeline de localización del catálogo y la capa de i18n del frontend con remix-i18next, separando el contenido traducible del que llegaba desde integraciones de terceros.',
    result:
      'El mercado salió a producción con catálogo e interfaz localizados, y aislé por qué parte del contenido dinámico seguía en el idioma original: integraciones externas que no estaban conectadas al sistema de traducciones.',
    tags: ['Hydrogen', 'Remix', 'remix-i18next', 'GraphQL', 'Shopify Plus'],
  },
  {
    title: 'Storefront headless con Hydrogen',
    role: 'Búsqueda, UX de catálogo y promociones',
    context:
      'El storefront usaba un motor de búsqueda de terceros que no lograba añadir productos al carrito desde sus resultados.',
    decision:
      'Rastreé el fallo hasta una incompatibilidad de identificadores —el buscador devolvía IDs de producto y el carrito espera IDs de variante— y resolví el mapeo antes del add to cart. Además rediseñé la UX de los listados y construí una promoción de regalo automático por umbral de compra.',
    result:
      'Búsqueda y carrito integrados de extremo a extremo, listados de producto más claros y una mecánica promocional que se aplica sola al alcanzar el umbral.',
    tags: ['Hydrogen', 'React', 'GraphQL', 'Shopify Cart API'],
  },
  {
    title: 'Gestor de metaobjetos desde Google Sheets',
    role: 'Herramienta interna · 9 módulos',
    context:
      'El contenido estructurado de la tienda se cargaba a mano en el admin, registro por registro y país por país.',
    decision:
      'Desarrollé una herramienta interna en Google Apps Script organizada en 9 módulos: queries y mutaciones GraphQL, resolución de dependencias entre metaobjetos, subida de imágenes, soporte multi-país y modo dry-run activado por defecto.',
    result:
      'El equipo carga y actualiza contenido masivamente desde una hoja de cálculo, validando el resultado antes de escribir nada en producción.',
    tags: ['Google Apps Script', 'GraphQL', 'Shopify Admin API', 'Google Sheets'],
  },
  {
    title: 'Discrepancia en el píxel de conversión',
    role: 'Diagnóstico de tracking · Meta Ads',
    context:
      'Las compras reales no cuadraban con las compras atribuidas por producto en la plataforma de anuncios, y no había una causa evidente.',
    decision:
      'En lugar de tocar la implementación a ciegas, fui descartando hipótesis con datos: cobertura del evento, deduplicación entre navegador y servidor y calidad de coincidencia de los parámetros enviados.',
    result:
      'Aislé la causa en una etiqueta de tracking incompleta, dejando documentado el razonamiento y los datos que descartaban el resto de hipótesis.',
    tags: ['Meta Pixel', 'Conversions API', 'Analítica', 'Debugging'],
  },
];

export const SIDE_PROJECTS: SideProject[] = [
  {
    title: 'NeonVibe',
    description:
      'E-commerce completo construido como proyecto final de desarrollo web: catálogo, carrito y checkout sobre una arquitectura de componentes.',
    image: '/proyects/ecommerce.webp',
    tags: ['Astro', 'React', 'Tailwind CSS'],
    github: 'https://github.com/sebas0207/ecommerce-proyect',
    demo: 'https://ecommerce-proyect-333.vercel.app/',
  },
  {
    title: 'LavaMix',
    description:
      'Traductor de símbolos de lavado y secado para una empresa de lavandería, pensado para consultarse desde el móvil en planta.',
    image: '/proyects/Lavamix.webp',
    tags: ['Astro', 'Tailwind CSS'],
    github: 'https://github.com/sebas0207/LavaMix',
    demo: 'https://lava-mix.vercel.app/',
  },
];

export type { CaseStudy, SideProject };
