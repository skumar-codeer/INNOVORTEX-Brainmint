import { NavLink } from '@/types';

export const MAIN_NAVIGATION: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products/safeedge',
    subLinks: [
      {
        label: 'SafeEdge™ Platform',
        href: '/products/safeedge',
        description: 'Edge AI Safety & Alert Infrastructure',
      },
    ],
  },
  { label: 'Technology', href: '/technology' },
  {
    label: 'Solutions',
    href: '/solutions',
    subLinks: [
      { label: "Women's Hostels", href: '/solutions#womens-hostels' },
      { label: 'Educational Campuses', href: '/solutions#educational-campuses' },
      { label: 'Workplaces', href: '/solutions#workplaces' },
      { label: 'Healthcare Facilities', href: '/solutions#healthcare-facilities' },
      { label: 'Public Infrastructure', href: '/solutions#public-infrastructure' },
      { label: 'Rural & Low-Connectivity', href: '/solutions#rural-areas' },
    ],
  },
  { label: 'Impact', href: '/impact' },
  { label: 'About Us', href: '/about' },
  { label: 'Vision', href: '/vision' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Trust & AI Ethics', href: '/trust' },
  { label: 'Resources', href: '/resources' },
];

export const FOOTER_LINKS = {
  products: [
    { label: 'SafeEdge™ Platform', href: '/products/safeedge' },
    { label: 'Hardware Specifications', href: '/products/safeedge#specs' },
    { label: 'System Dashboard', href: '/#dashboard' },
  ],
  solutions: [
    { label: "Women's Hostels", href: '/solutions#womens-hostels' },
    { label: 'Educational Campuses', href: '/solutions#educational-campuses' },
    { label: 'Workplaces', href: '/solutions#workplaces' },
    { label: 'Healthcare Facilities', href: '/solutions#healthcare-facilities' },
    { label: 'Public Infrastructure', href: '/solutions#public-infrastructure' },
    { label: 'Rural & Low-Connectivity', href: '/solutions#rural-areas' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Vision', href: '/vision' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Trust & Ethics', href: '/trust' },
    { label: 'Contact', href: '/contact' },
    { label: 'Request Demo', href: '/request-demo' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Responsible AI Policy', href: '/responsible-ai' },
  ],
};

export const FOOTER_NAVIGATION = FOOTER_LINKS;