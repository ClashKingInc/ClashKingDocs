---
description: Link Clash of Clans accounts to Discord users with /link.
---

# 🔗 (Un)link players

The `/link` command lets you connect Clash of Clans accounts to Discord users. This helps the bot know which accounts belong to which members.

## /link add

Use `/link add` to link an account. This opens a window where you enter:

- **Player tag**: the tag of the Clash of Clans account you want to link.
- **API token**: the API token from your Clash of Clans account.

:::info
Your API token is safe to share with the bot. The bot uses it only once to verify that the Discord user is the actual owner of the account. This improves privacy and helps prevent abuse.
:::

## /link remove

To remove a linked account, use `/link remove` and provide the player as an argument.

## /link set-main

Use `/link set-main` with a **player** argument to set that account as your main account. Many Discord bot commands use this main account first when performing actions for you.

## /link list

Use `/link list` to view linked accounts. It has two optional inputs:

- **clan**: filter the results to a specific clan.
- **discord_user**: filter the results to a specific Discord user.

If you do not provide either option, the command shows all linked accounts you can access.
