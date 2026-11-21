---
description: Frequently Asked Questions
---

# ❓ FAQ

<details>

<summary>How do I set up the bot?</summary>

Follow the [Quick Start](quick-start.md) to add ClashKing, open the dashboard, add clans, and configure your first features.

</details>

<details>

<summary>Why are some statistics missing or different from the game?</summary>

Some statistics rely on recorded observations rather than values directly available from Clash of Clans. Data may be delayed, unavailable, or incomplete, especially for earlier periods. Missing data does not necessarily mean the value is zero. Add your clan through **Management → Clans** in the dashboard; see [Add / Setup a clan](dashboard/add-setup-a-clan.md).

</details>

<details>

<summary>What do last online and activity mean?</summary>

**Last online** is the time of the most recent recorded indication of player activity. It is an estimate based on observed game data, not an exact online status. **Activity** counts recorded observations during the selected period; it does not measure time spent playing. An unavailable observation does not prove a player was inactive.

For example, if a player's game data changes between observations, ClashKing may record activity, but it cannot tell exactly how long the player was online. See [Clan commands](bot-commands/clan-commands.md) and [Family commands](bot-commands/family-commands.md) for activity reports.

</details>

<details>

<summary>Why are the bot's emojis not showing?</summary>

Check whether the emojis appear in other channels and whether the bot can use external emojis in the affected channel. Review the server and channel permissions, including channel overrides. If the issue continues, contact the [support server](https://discord.gg/clashking).

</details>

<details>

<summary>Why isn't my feed or log posting?</summary>

1. Open **Logs** in the dashboard and select the correct server or clan. Check that the log is enabled and its destination is saved.
2. Check **Issues** for an unavailable channel, thread, or forum post. Reopen an archived forum post before selecting it again.
3. Check that ClashKing can create webhooks and post in the destination. Logs update periodically, so allow time for the event to appear.

See [Setup logs](dashboard/setup-logs.md) for details. For war reminders, also check that the clan's war log is public; see [Reminders](dashboard/reminders.md).

</details>

<details>

<summary>Why are my Legend statistics different from the game?</summary>

Legend views use recorded battle data. Recent results may take time to appear, and missing observations can make a day's or season's totals incomplete. Some completed days include estimated automatic defenses, marked **Auto** in the day view; those values depend on available earlier defenses.

Compare the correct day using **Today** or **Yesterday** under `/legends player`, and run the command again later if results are still being recorded. Totals are not guaranteed to match the game when data is incomplete. See [Legends](bot-commands/legends.md).

</details>

<details>

<summary>Can the bot show where Capital Gold was donated?</summary>

ClashKing can show recorded Capital Gold donation totals, but the game data does not identify the specific building or upgrade that received each donation.

</details>
