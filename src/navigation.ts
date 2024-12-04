import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
  ],
  actions: [{ text: 'Contact us', href: getPermalink('/contact'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Casa Concepts',
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
          text: 'Painting',
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
