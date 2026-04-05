import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ClashKing Docs',
  tagline: 'Guides and setup help for ClashKing',
  favicon: 'img/logos/bot-app-logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.clashking.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ClashKingInc',
  projectName: 'ClashKingDocs',

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl', 'fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          exclude: ['**/SUMMARY.md'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        language: ['en'],
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ClashKing',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Over',
          items: [
            {
              label: 'Functies',
              href: 'https://clashk.ing/features',
            },
            {
              label: 'Hulp nodig?',
              href: 'https://clashk.ing/help',
            },
            {
              label: 'Open Source',
              href: 'https://clashk.ing/open-source',
            },
            {
              label: 'Steun ons',
              href: 'https://clashk.ing/support',
            },
          ],
        },
        {
          title: 'Bot',
          items: [
            {
              label: 'Dashboard',
              href: 'https://clashk.ing/login',
            },
            {
              label: 'Nodig Bot Uit',
              href: 'https://invite.clashk.ing/',
            },
          ],
        },
        {
          title: 'Bronnen',
          items: [
            {
              label: 'Documentatie',
              href: 'https://docs.clashk.ing',
            },
            {
              label: 'Snelstartgids',
              href: 'https://docs.clashk.ing/quick-start',
            },
            {
              label: 'GitHub',
              href: 'https://git.clashk.ing/',
            },
            {
              label: 'Meld een bug',
              href: 'https://github.com/ClashKingInc/ClashKingBot/issues',
            },
            {
              label: 'Vraag functie aan',
              href: 'https://github.com/ClashKingInc/ClashKingBot/issues',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord Server',
              href: 'https://discord.clashk.ing/',
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.clashk.ing/',
            },
          ],
        },
      ],
      copyright: `De krachtigste Clash of Clans-bot voor Discord-communities.<br/>© ${new Date().getFullYear()} ClashKing. Alle rechten voorbehouden. · <a href="https://clashk.ing/privacy">Privacybeleid</a> · <a href="https://clashk.ing/terms">Servicevoorwaarden</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
