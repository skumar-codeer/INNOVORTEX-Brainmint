import { NavLink } from '@/types';

export const MAIN_NAVIGATION: NavLink[] = [
  { label: 'Products', href: '/products/safeedge' },
  { label: 'Technology', href: '/technology' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Impact', href: '/impact' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Dashboard Demo', href: '/dashboard' },
];

export const FOOTER_NAVIGATION = {
  main: [
    { label: 'Products', href: '/products/safeedge' },
    { label: 'Technology', href: '/technology' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Impact', href: '/impact' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Resources', href: '/resources' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Responsible AI', href: '/responsible-ai' },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com', placeholder: true },
    { label: 'Instagram', href: 'https://instagram.com', placeholder: true },
    { label: 'YouTube', href: 'https://youtube.com', placeholder: true },
  ],
};
