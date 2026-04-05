import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'README',
    'quick-start',
    'get-the-mobile-app',
    'faq',
    {
      type: 'category',
      label: 'Clan Setups',
      items: [
        'clan-setups/add-a-clan',
        'clan-setups/setup-a-clan',
        'clan-setups/log-setup',
        {
          type: 'category',
          label: 'Link Players',
          items: ['clan-setups/link-players/README', 'clan-setups/link-players/unlink-players'],
        },
        'clan-setups/others',
      ],
    },
    {
      type: 'category',
      label: 'Server Setups',
      items: [
        'server-setups/setup-a-server',
        'server-setups/whitelist',
        'server-setups/reddit-recruit-feed-english-speaking-only',
        'server-setups/voice-countdowns',
        'server-setups/reminders',
        'server-setups/link-parse',
        'server-setups/autoboards',
        'server-setups/others',
      ],
    },
    {
      type: 'category',
      label: 'Players Roles',
      items: [
        {
          type: 'category',
          label: 'Roles (TH & More)',
          items: [
            'players-roles/roles-th-and-more/README',
            'players-roles/roles-th-and-more/family-roles',
            'players-roles/roles-th-and-more/builder-league-roles',
            'players-roles/roles-th-and-more/builder-hall-roles',
            'players-roles/roles-th-and-more/clan-category-role',
            'players-roles/roles-th-and-more/league-roles',
            'players-roles/roles-th-and-more/tenure-role',
            'players-roles/roles-th-and-more/townhall-roles',
          ],
        },
        'players-roles/manual-refresh-roles-and-nicknames',
        'players-roles/auto-refresh',
      ],
    },
    {
      type: 'category',
      label: 'Clans Management',
      items: [
        'clans-management/bans',
        {
          type: 'category',
          label: 'Strikes',
          items: [
            'clans-management/strikes/README',
            'clans-management/strikes/add-a-strike',
            'clans-management/strikes/view-strikes',
            'clans-management/strikes/auto-strikes',
          ],
        },
        {
          type: 'category',
          label: 'Rosters',
          items: [
            'clans-management/rosters/README',
            'clans-management/rosters/create-a-roster',
            'clans-management/rosters/set-up-a-roster',
            'clans-management/rosters/post-a-roster-signup-and-more',
            'clans-management/rosters/signing-up-on-a-roster',
            'clans-management/rosters/manage-players',
            'clans-management/rosters/missing-players',
            'clans-management/rosters/manage-rosters-and-more',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Clan & Family Commands',
      items: [
        'clan-and-family-commands/clan-commands',
        'clan-and-family-commands/family-commands',
        'clan-and-family-commands/leaderboards',
        'clan-and-family-commands/war-and-cwl',
        'clan-and-family-commands/graphs',
        'clan-and-family-commands/boosted-super-troops',
      ],
    },
    {
      type: 'category',
      label: 'Ticketing',
      items: [
        'ticketing/creating-a-ticket-panel',
        'ticketing/adding-buttons-and-actions',
        'ticketing/inside-the-ticket',
      ],
    },
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
    {
      type: 'category',
      label: 'Utility',
      items: [
        'utility/help',
        'utility/buttons',
        'utility/embeds',
        'utility/pepe',
        'utility/army-links',
        'utility/base-links',
        'utility/giveaways',
      ],
    },
    {
      type: 'category',
      label: 'Custom Bots',
      items: ['custom-bots/custom-bot', 'custom-bots/developer-portal', 'custom-bots/turn-it-on'],
    },
  ],
};

export default sidebars;
