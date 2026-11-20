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
        'use-the-dashboard/add-a-clan',
        'use-the-dashboard/setup-logs',
        'server-setups/whitelist',
        'server-setups/reddit-recruit-feed',
        'server-setups/voice-countdowns',
        'server-setups/reminders',
        'server-setups/link-parse',
        'server-setups/autoboards',
        'utility/giveaways',
        'players-roles/roles-th-and-more/README',
        'clans-management/rosters/README',
      ],
    },
    {
      type: 'category',
      label: 'Bot commands',
      items: [
        'bot-commands/roster',
        'bot-commands/reminders',
        'use-the-dashboard/link-parsing',
        'bot-commands/link-players',
        'utility/help',
        'bot-commands/graphs',
        'bot-commands/war-and-cwl',
        'players-roles/manual-refresh-roles-and-nicknames',
        'bot-commands/bans-and-strikes',
        'clan-and-family-commands/clan-commands',
        'clan-and-family-commands/family-commands',
        'clan-and-family-commands/leaderboards',
        'bot-commands/tickets',
        {
          type: 'category',
          label: 'Player Commands',
          items: [
            'player-commands/lookup',
            {
              type: 'category',
              label: 'Legends',
              items: [
                'player-commands/legends/README',
                'player-commands/legends/legends-search',
                'player-commands/legends/legends-clan',
                'player-commands/legends/legends-stats',
                'player-commands/legends/legends-history',
                'player-commands/legends/legends-poster',
              ],
            },
            'player-commands/accounts-check',
            'player-commands/user-settings',
            'player-commands/to-do',
            'player-commands/ranks-and-eos',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Unused',
      items: [
        'utility/buttons',
        'utility/embeds',
        'clan-and-family-commands/boosted-super-troops',
        'players-roles/auto-refresh',
        'clans-management/strikes/auto-strikes',
        {
          type: 'category',
          label: 'Ticketing',
          items: [
            'ticketing/creating-a-ticket-panel',
            'ticketing/adding-buttons-and-actions',
            'ticketing/inside-the-ticket',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
