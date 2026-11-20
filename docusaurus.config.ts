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
    image: 'img/logos/bot-app-logo.png',
    docs: {
      sidebar: {hideable: false},
    },
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
          type: 'custom-settings',
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
          title: 'About',
          items: [
            {
              label: 'Features',
              href: 'https://clashk.ing/features',
            },
            {
              label: 'Need Help?',
              href: 'https://clashk.ing/help',
            },
            {
              label: 'Open Source',
              href: 'https://clashk.ing/open-source',
            },
            {
              label: 'Support Us',
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
              label: 'Invite Bot',
              href: 'https://invite.clashk.ing/',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Documentation',
              href: 'https://docs.clashk.ing',
            },
            {
              label: 'Quick Start',
              href: 'https://docs.clashk.ing/quick-start',
            },
            {
              label: 'GitHub',
              href: 'https://git.clashk.ing/',
            },
            {
              label: 'Report a Bug',
              href: 'https://github.com/ClashKingInc/ClashKingBot/issues',
            },
            {
              label: 'Request a Feature',
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
      copyright: `The most powerful Clash of Clans bot for Discord communities.<br/>© ${new Date().getFullYear()} ClashKing. All rights reserved. · <a href="https://clashk.ing/privacy">Privacy Policy</a> · <a href="https://clashk.ing/terms">Terms of Service</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
