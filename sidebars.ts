import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'README',
    'quick-start',
    'get-the-mobile-app',
    'faq',
    {
      type: 'category',
      label: 'Use the dashboard',
      items: [
        'use-the-dashboard/dashboard-explained',
        'server-setups/whitelist',
        'use-the-dashboard/add-a-clan',
        'players-roles/roles-th-and-more/README',
        'clans-management/rosters/README',
        'use-the-dashboard/setup-logs',
        'server-setups/reminders',
        'server-setups/voice-countdowns',
        'server-setups/reddit-recruit-feed',
        'server-setups/autoboards',
        'utility/giveaways',
        'server-setups/link-parse',
      ],
    },
    {
      type: 'category',
      label: 'Bot commands',
      items: [
        'utility/help',
        'bot-commands/link-players',
        'player-commands/accounts-check',
        'player-commands/user-settings',
        'player-commands/lookup',
        'player-commands/to-do',
        'use-the-dashboard/link-parsing',
        'clan-and-family-commands/clan-commands',
        'clan-and-family-commands/family-commands',
        'bot-commands/war-and-cwl',
        'bot-commands/roster',
        'player-commands/legends/README',
        'player-commands/ranks-and-eos',
        'clan-and-family-commands/leaderboards',
        'bot-commands/graphs',
        'bot-commands/reminders',
        'players-roles/manual-refresh-roles-and-nicknames',
        'bot-commands/bans-and-strikes',
        'bot-commands/tickets',
      ],
    },
  ],
};

export default sidebars;
