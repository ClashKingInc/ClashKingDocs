# 📋 Rosters

Rosters help organize players for CWL, wars, and other events. Create and manage them under **Management → Rosters** in the dashboard. Players can sign up through a roster published in Discord.

The example below shows an older roster layout; the current buttons and appearance can differ.

![Example roster](</img/docs-media/image (32).png>)

## ⚔️ Create a roster

1. Open the dashboard, select your server, and choose **Rosters** under **Management**.
2. Click **Create Roster** and enter a name, for example `Clan 1 CWL`.
3. Choose **Clan** or **Family** as the roster type. For a clan roster, select the clan.
4. Choose a signup scope: **Clan Only**, **Family Only**, or **Anyone**, and optionally add a description.
5. Click **Create Roster**. Open the roster to configure its settings or add players.

Add the relevant clan to your server first if it is not available in the selector.

## ⚙️ Set up a roster

Open a roster under **Management → Rosters** and select **Settings**. After making changes, click **Save Settings**.

- **Identity & Configuration**: change the name, description, type, clan, signup scope, event start time, recurrence, and roster group.
- **Restrictions & Limits**: set Town Hall bounds, roster and signup limits, accounts per user, and whether accounts must be verified.
- **Signup categories**: choose available categories and a default. For a grouped roster, categories are managed in the group's settings.
- **Signup questions**: add questions for players to answer when they sign up.
- **Appearance**: set a roster image and embed color. Use the roster's column controls to choose displayed player information.

:::warning
Changing signup questions clears existing answers for that roster; signed-up members remain on it. Review the confirmation before saving.
:::

Categories describe a player's signup, for example **Available** or **Only if needed**. Roster groups organize multiple rosters, for example all CWL rosters, and can share settings and automations. See Manage rosters.

## 📝 Post a roster

Open the roster in the dashboard and click **Post Roster**. Select a Discord channel and publication type, then click **Post Roster** again.

- **Open Signups** (signup): publishes a roster with buttons to sign up or remove a signup.
- **View** (post): publishes the roster without signup buttons.
- **Post Roster** (static): publishes a snapshot.

You can also use `/roster post` in Discord, selecting a roster and **Signup**, **Post**, or **Static**. The command posts in the current channel and requires server management permission.

The following images illustrate older layouts; current controls may differ.

<figure><img src="/img/docs-media/image (34).png" alt="Older example of a signup roster" /><figcaption>Signup example</figcaption></figure>

<figure><img src="/img/docs-media/image (36).png" alt="Example of a roster snapshot" /><figcaption>Static roster example</figcaption></figure>

## 🙋‍♀️ Signing up on a roster

First [link your Clash of Clans account](../../clan-setups/link-players/) to Discord. A roster's signup scope, account verification, Town Hall and capacity rules determine whether an account is eligible.

### Sign up

1. Click **Join** or **Sign up** on the Discord roster post.
2. Select your account or accounts and answer any questions in the form. When questions are configured, sign up one account at a time.
3. Submit the form and check the confirmation. Ask your clan staff if you cannot sign up or find your account.

### Remove a signup

Click **Remove** or **Remove signup**, select the account to withdraw, and confirm. Ask your clan staff if you need help.

## ↔️ Manage players

Open a roster under **Management → Rosters** to manage its **Members**.

- Click **Add Members** to select players from available clan members, search server members, or enter player tags in bulk.
- Use the member actions to remove players. You can also organize players by signup category.
- Use **Refresh** to update member data.
- To compare or move players between rosters, choose **Compare** on the rosters page, select two to four rosters, and drag players between them.

For example, move a player from a main CWL roster to a second roster using the comparison view. See Missing players for players not yet registered.

## ❓ Missing players

For a **clan roster**, open the roster and choose **Missing Members**. The dashboard compares clan members with registrations and shows coverage and missing players. Select players and choose **Add Selected**, or use **Add All**.

For a roster in a group, the dialog can compare against this roster or the whole group. This view is available for clan rosters.

To request a reminder, use the roster's **Automations** tab to schedule a suitable reminder, or use the dashboard's configured reminder features where applicable.

## ⚒️ Manage rosters & more

Use **Management → Rosters** to find your rosters. Open one to manage its members, settings, and automations.

### Copy, clear, or delete

Use **Clone** on a roster to create a copy, optionally including members. In the roster details, **Clear members** removes members while keeping the roster. Deleting a roster permanently removes it; review the confirmation before continuing.

### Groups and signup categories

**Groups** organize multiple rosters, for example a set of CWL lineups. Group rules can control limits and available signup categories across the group. **Categories** describe a player's signup, for example **Available** or **Tentative**; they are shared across the server. Deleting a roster group leaves its rosters ungrouped.

### Automations

Use **Automations → Create Automation** in a roster to schedule actions such as reminders, posting a roster, opening or closing signups, clearing members, archiving, or deleting. Choose the scheduled time and relevant destination. Group automations are managed from the group's settings. Review the action carefully, especially for clearing or deleting.

### Search and compare

Search the dashboard roster list by name or clan. **Compare** lets you select two to four rosters and move players between them. In Discord, `/roster search` finds this server's rosters for a player or Discord user; `/roster post` publishes an existing roster.
