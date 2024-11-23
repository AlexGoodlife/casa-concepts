import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      links: [
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Home',
          href: getPermalink('/services'),
        },
        {
          text: 'Construction',
          href: getPermalink('/services') + '#construction',
        },
        {
          text: 'Swimming pools',
          href: getPermalink('/services') + '#pools',
        },
        {
          text: 'Refurbishing',
          href: getPermalink('/services') + '#refurbishing',
        },
        {
          text: 'Insulation',
          href: getPermalink('/services') + '#insulation',
        },
        {
          text: 'Paint jobs',
          href: getPermalink('/services') + '#paint',
        },
      ],
    },
  ],
  actions: [{ text: 'Contact us', href: getPermalink('/contact'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Services',
      links: [
        {
          text: 'Home',
          href: getPermalink('/services'),
        },
        {
          text: 'Construction',
          href: getPermalink('/services') + '#construction',
        },
        {
          text: 'Swimming pools',
          href: getPermalink('/services') + '#pools',
        },
        {
          text: 'Refurbishing',
          href: getPermalink('/services') + '#refurbishing',
        },
        {
          text: 'Insulation',
          href: getPermalink('/services') + '#insulation',
        },
        {
          text: 'Paint jobs',
          href: getPermalink('/services') + '#paint',
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
