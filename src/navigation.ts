import { getPermalink } from './utils/permalinks';


export const headerData = {
  links: [
    {
      text: 'nav.home',
      href: getPermalink('/'),
    },
    {
      text: 'nav.about',
      href: getPermalink('/about'),
    },
    {
      text: 'nav.services',
      href: getPermalink('/services'),
    },
  ],
  actions: [{ text: 'nav.contact', href: getPermalink('/contact'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Casa Concepts',
      links: [
        { text: 'nav.about', href: getPermalink('/about') },
        { text: 'nav.contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'nav.services',
          
      links: [
        {
          text: 'nav.home',
          href: getPermalink('/services'),
        },
        {
          text: 'nav.construction',
          href: getPermalink('/services') + '#construction',
        },
        {
          text: 'nav.pools',
          href: getPermalink('/services') + '#pools',
        },
        {
          text: 'nav.refurb',
          href: getPermalink('/services') + '#refurbishing',
        },
        {
          text: 'nav.insulation',
          href: getPermalink('/services') + '#insulation',
        },
        {
          text: 'nav.painting',
          href: getPermalink('/services') + '#paint',
        },
      ],
    },
  ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  // socialLinks: [
  //   { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  //   // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  // ],
  footNote: `
        <a class="text-blue-600 underline dark:text-muted" href="https://www.racius.com/shadow-brook-lda/"> Shadow Brook Lda</a> · All rights reserved.
  `,
};
