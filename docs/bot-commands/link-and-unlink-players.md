---
slug: /bot-commands/link-and-unlink-players
description: Link Clash of Clans accounts to Discord and manage account links.
---

# 🔗 (Un)link players

Link your Clash of Clans accounts to Discord so ClashKing can identify your players for features such as roles, reminders, and roster signups. Each player can link their own accounts using the commands below.

## Link your account

1. In your Discord server, run `/link add`.
2. Enter your **player tag** (for example, `#PVJ98GL`) and your Clash of Clans **API token** in the form. You can find the player tag on your in-game profile and the API token in the game's settings.
3. Submit the form and check the confirmation. Repeat for each account you want to link.

:::info
The API token verifies that you own the player account. Enter it in the bot's form; the bot does not retain the token.
:::

## Remove a link

Run `/link remove` and select one of your linked accounts as **player**. This removes your own link.

## Choose a main account

Run `/link set-main` and select one of your visible linked accounts. Your choice is specific to this Discord server and is used for features such as nickname refreshes.

## View linked accounts

Run `/link list` to see your own visible linked accounts. To see another view, provide one of these optional inputs:

- **discord_user**: show that user's visible linked accounts.
- **clan**: show links for a clan added to this server, including linked, unlinked, and hidden or outside-server entries.

Choose a user or a clan, not both. Hidden account links are subject to the owner's privacy settings and clan verification.

## Manage unverified clan links

A server manager or a role with **Links → Manage** dashboard access can use `/modlink add` or `/modlink remove` for players currently in a verified family clan. To add a link, select the **player** and the current Discord server member; the resulting link is unverified. Verified player links can only be changed by their owner. See [Add / Setup a clan](../dashboard/add-setup-a-clan.md) for clan verification.

The dashboard also has **Management → Links** for viewing accounts and clan rosters. In the **Clans** tab, Links managers can add or remove eligible unverified links for verified clans.

## Explore links in the dashboard

Under **Management → Links**, use **Clans** to browse clan rosters, **Accounts** to find server members and their linked accounts, and **Stats** for family or server totals and verification statistics. Search, filter, and use the page controls to find entries. Available actions depend on your Links access and the account's verification and visibility.

In **Accounts**, adding a new link requires the player's in-game API token. In **Clans**, authorized Links managers can manage eligible unverified links for verified family clans. See [Dashboard access](../dashboard/dashboard-access.md) for permissions.
