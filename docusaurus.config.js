module.exports = {
  title: 'ChocoDevDay',
  tagline: 'Наши активности в it-среде',
  url: 'https://chocofamilyme.github.io/',
  baseUrl: '/chocodevday/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'chocofamilyme', // Usually your GitHub org/user name.
  projectName: 'chocodevday', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'ChocoDevDay',
      logo: {
        alt: 'ChocoDevDay',
        src: 'img/logo.jpg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Ивенты',
          position: 'left',
        },
        {to: 'blog', label: 'Блог', position: 'left'},
        {
          href: 'https://github.com/chocofamilyme/chocodevday.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Ивенты',
          items: [
            {
              label: 'Посмотреть записи',
              to: 'https://youtube.com',
            },
            {
              label: 'Как это было',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Комьюнити',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/chocofamilyme',
            },
            {
              label: 'Youtube',
              href: 'https://youtube.com',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/chocodevcon',
            },
          ],
        },
        {
          title: 'Еще',
          items: [
            {
              label: 'Наши вакансии',
              to: 'https://google.com',
            },
            {
              label: 'Наш instagram',
              href: 'https://google.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
