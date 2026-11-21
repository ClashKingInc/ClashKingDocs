---
slug: /bot-commands/user-settings
---

# 😎 User settings

Choose a main linked account for each Discord server where you use ClashKing.

## Choose your main account

1. Link your account using `/link add` if you have not done so yet. See [Link players](link-and-unlink-players.md).
2. In the Discord server, run `/link set-main` and select one of your visible linked accounts as **player**.
3. Check the bot's response. ClashKing saves the choice for that server and starts a nickname refresh.

For example, if you use different accounts in two servers, you can choose a different main account in each one. Your choice is used for nickname updates according to that server's configured rules. Nickname changes also depend on the bot's permissions; see [Manual refresh](manual-refresh-roles-and-nicknames.md).

## Looking up accounts

The selected server main account does not determine the account opened by `/player lookup`. Without a player or Discord user specified, lookup opens your visible linked account with the highest Town Hall level. You can also select a player directly. See [Player lookup](lookup.md).
