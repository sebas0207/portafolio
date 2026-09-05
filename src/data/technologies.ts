interface Technology {
  name: string;
  icon: string;
}

interface TechnologyGroup {
  category: string;
  items: Technology[];
}

export const TECHNOLOGY_GROUPS: TechnologyGroup[] = [
  {
    category: 'E-commerce & Headless',
    items: [
      { name: 'Shopify Plus', icon: '/images/tech-icons/shopify.svg' },
      { name: 'Hydrogen / Remix', icon: '/images/tech-icons/remix.svg' },
      { name: 'GraphQL', icon: '/images/tech-icons/graphql.svg' },
      { name: 'Astro', icon: '/images/tech-icons/astro.svg' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: '/images/tech-icons/react.svg' },
      { name: 'TypeScript', icon: '/images/tech-icons/typescript.svg' },
      { name: 'JavaScript', icon: '/images/tech-icons/javascript.svg' },
      { name: 'Tailwind CSS', icon: '/images/tech-icons/tailwind.svg' },
      { name: 'HTML', icon: '/images/tech-icons/html.svg' },
      { name: 'CSS', icon: '/images/tech-icons/css.svg' },
    ],
  },
  {
    category: 'Backend & Datos',
    items: [
      { name: 'Laravel 11', icon: '/images/tech-icons/laravel.svg' },
      { name: 'PHP', icon: '/images/tech-icons/php.svg' },
      { name: 'Python', icon: '/images/tech-icons/python.svg' },
      { name: 'Node.js', icon: '/images/tech-icons/nodejs.svg' },
      { name: 'MySQL', icon: '/images/tech-icons/mysql.svg' },
      { name: 'Java', icon: '/images/tech-icons/java.svg' },
    ],
  },
  {
    category: 'Automatización & Herramientas',
    items: [
      { name: 'n8n', icon: '/images/tech-icons/n8n.svg' },
      { name: 'Google Apps Script', icon: '/images/tech-icons/apps-script.svg' },
      { name: 'Git', icon: '/images/tech-icons/git.svg' },
      { name: 'GitHub', icon: '/images/tech-icons/github.svg' },
      { name: 'Docker', icon: '/images/tech-icons/docker.svg' },
      { name: 'Vercel', icon: '/images/tech-icons/vercel.svg' },
      { name: 'Figma', icon: '/images/tech-icons/figma.svg' },
    ],
  },
];

export type { Technology, TechnologyGroup };
