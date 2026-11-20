---
description: Manage player bans and strikes in Discord or the dashboard.
---

# 🚪 Bans & strikes

Bans and strikes help your server keep track of player moderation records. A ban records that a player should not return; a strike records a warning, such as a rule violation.

:::info
A ClashKing ban does **not** prevent a player from joining a clan. To receive a warning when a banned player joins, enable **Ban Alerts** for that clan under **Logs**. See [Setup logs](../use-the-dashboard/setup-logs.md).
:::

## Add a record

Use `/record add` in your Discord server and provide:

- **player_tag**: the Clash of Clans player tag.
- **type**: choose **Ban** or **Strike**.

In the form, enter a **Reason**. For a strike, you can also set a **Strike weight** (default 1) and an optional expiry in days. For example, use weight 2 for a more serious warning. Leave expiry blank for no expiry. For either type, you can optionally attach one evidence image: PNG, JPEG, GIF, or WebP up to 10 MB.

## View and remove records

Use `/record list` to see bans and strikes. Optionally choose **type** to show only bans or only strikes. The result includes controls for navigating, refreshing, and removing records.

To remove one directly, use `/record remove`, choose its **type**, and select the **record** from the suggestions. These Discord commands require **Manage Server** or **Administrator** permission.

## Manage records in the dashboard

Open the dashboard, select your server, and choose **Bans & Strikes** under **Management**. The **Bans** and **Strikes** tabs let you search, sort, add, and remove records; strikes can also be viewed by player.

When adding a record in the dashboard, enter a player tag and reason. Strikes also have a weight and optional expiry. An optional evidence image can be provided as a publicly accessible image URL.
