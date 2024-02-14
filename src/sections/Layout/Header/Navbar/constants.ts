import { Page } from '@/types';
import { TNavbarItem } from './types';

export const navbarItems: Array<TNavbarItem> = [
  { key: 'profile', href: Page.profile, withAuth: true },
  {
    key: 'products',
    href: Page.products,
    withAuth: false,
  },
  {
    key: 'categories',
    href: Page.categories,
    withAuth: false,
  },
];
