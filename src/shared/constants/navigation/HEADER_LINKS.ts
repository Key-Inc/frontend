import { ROUTES } from '../routes';

interface NavigationLinkInfo {
  text: string;
  href: string;
}

export const HEADER_LINKS: NavigationLinkInfo[] = [
  {
    text: 'Заявки на регистрацию',
    href: ROUTES.REGISTRATIONREQUESTS,
  },
  {
    text: 'Заявки на ключи',
    href: ROUTES.ROOT,
  },
  {
    text: 'Ключи',
    href: ROUTES.KEYS,
  },
  // {
  //   text: 'Профиль',
  //   href: ROUTES.PROFILE,
  // },
];
