---
description: Set up logs from the dashboard.
---

# 📄 Setup logs

Logs post clan, player, and server activity to Discord. Configure each log in the dashboard so you can choose what to track and where it appears.

## Set up a log

1. Open the ClashKing dashboard, select your Discord server, and open **Logs**.
2. In **Server or clan**, select a clan for its clan, war, capital, and player logs, or select your server for server-wide logs. Add a clan to the server first if it is not listed.
3. Open the appropriate tab, find the log you want, and turn its switch on.
4. Choose a destination channel. You can also choose a thread; a forum channel requires a forum post. Some logs have additional options, such as the Reddit feed's role and Town Hall filter.
5. Click **Save destination**. Repeat for other logs and clans as needed.

## Manage and troubleshoot logs

Return to the same server or clan and log card to change the destination or turn a log off. The **Issues** section highlights enabled logs whose channel, thread, or forum post is unavailable; choose **Review** to find the affected log. If a forum post was archived, reopen it in Discord and refresh the dashboard before selecting it again. ClashKing needs permission to create webhooks and post in the chosen destination.

## Logs type

On this section we will explain the different logs type, with links to an example.

:::info
If you are curious what these logs look like, they are all on demo in the [support server.](https://discord.gg/clashking) You can also click on the name of the log type to be redirected to an example.
:::

:::warning
Logs are updated periodically, so activity may not appear immediately.
:::

### Clan logs

- [**Member Join**](https://discord.com/channels/923764211845312533/1128182552121839648)**:** Send a message when a member join your clan.
- [**Member Leave**](https://discord.com/channels/923764211845312533/1128182846218055722)**:**  Send a message when a member leave your clan. A unique feature of this Join/Leave log is that it shows _where_ the player goes after they leave. Helpful if you need to see if a member moved to another family clan or maybe went to a rival?!
- [**Member donation**](https://discord.com/channels/923764211845312533/1128185494497398834)**:** Send a message every time someone receive/give troops
- **Clan achievements:** Send a message when the clan move up.
- **Clan Requirements:** Send a message when clan settings has been modified.
- **Clan Description**: Send a message when the clan description has been modified
- **Ban Alerts**: Send an alert when a banned player joins the clan.


### War/CWL Logs

- [**War Log**](https://discord.com/channels/923764211845312533/1128186867825774672)**:** A continuous log of war changes posted in a channel - attacks, defenses, war start, end, etc.
- [**War Panel**](https://discord.com/channels/923764211845312533/1128884598609285121)**:** Send an embed panel when a new war starts and update it as the war progresses.
- **CWL Lineup Change**

Setting both war log and war panel will result in double images of the result of the war.

:::warning
Your clan’s war log must be public in Clash of Clans for war information to be available.
:::

### Capital Logs

- [**Capital Donations**](https://discord.com/channels/923764211845312533/1128186033918459905/1283537311958827122)**:** Send a message each time a player donate capital gold with the amount donated.
- [**Capital Attacks**](https://discord.com/channels/923764211845312533/1128186033918459905/1282595848181514302)**:** Send a message each time a player attacks with the amount of capital gold received.
- [**Capital Panel**](https://discord.com/channels/923764211845312533/1129404852385087498)**:** Auto updating panel of raid weekend info
- **Capital Weekly Summary:** Send the result of the raids at the end of the weekend as displayed in the game.

### Players Logs

- [**Role Change**](https://discord.com/channels/923764211845312533/1128185014773874770/1283202622450565171)**:** Send a message every time the player change role (indicate former role and new one)
- [**Troop Upgrade**](https://discord.com/channels/923764211845312533/1128185014773874770/1283787642386911333)**:** Send a message every time the player upgrade a troop (which one and new level)
- [**Super Troop Boosts**](https://discord.com/channels/923764211845312533/1128185014773874770/1283545307875115010)**:** Send a message every time the player boost a troop (which one)
- [**TrownHall Upgrade**](https://discord.com/channels/923764211845312533/1128185014773874770/1283708036535291914)**:** Send a message every time the player upgrade their townHall (with new level)
- [**League Change**](https://discord.com/channels/923764211845312533/1128185014773874770/1283508937324236954)**:** Send a message every time the player change league (indicate former league and new one)
- Spell Upgrade
- Hero Upgrade
- Hero Equipment Upgrade
- Name Change
- Legend Attacks
- Legend Defenses

### Server logs

Select your server in **Server or clan** to configure these feeds:

- **Clash of Clans maintenance**: posts when maintenance starts and ends.
- **Reddit Recruitment Feed**: shares recruitment posts; see [Reddit Recruit Feed](../server-setups/reddit-recruit-feed.md).
- **Reddit User Feed**: follows posts from up to two Reddit users, with optional comments on their posts.
