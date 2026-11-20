---
description: Add and configure a clan using the dashboard.
---

# ➕ Add / Setup a clan

Add your Clash of Clans clans to your Discord server in the dashboard, then configure their Discord roles and family settings.

## Add a clan

1. Open the ClashKing dashboard, select your server, and choose **Clans** under **Management**.
2. Click **Add Clan**, enter the clan tag, and optionally check **Verify this clan after adding**.
3. Click **Add Clan**. The clan appears in the connected clans list. If you chose verification, follow the instructions shown after adding it.

## Configure a clan

Find the clan in the list and click **Configure**. The available settings are:

- **Member Role**: the Discord role for members of this clan.
- **Leader Role**: the role for the clan leader and co-leaders.
- **Category**: group the clan with other clans, for example competitive or event clans.
- **Clan Abbreviation**: a short name that can be used in members' Discord nicknames when nickname changes are configured under **Roles / Family Settings**.

Click **Save Changes** when finished. Role fields require access to the **Roles** section; managing them requires permission to manage Roles. Clan settings require permission to manage Clans. Roles are applied through ClashKing's role management; choosing a role here does not itself refresh members.

## Verify a clan

Verification confirms that the clan belongs on your server. You can start it while adding the clan or open **Configure** and choose **Verify clan** later.

1. Copy the verification word from the dashboard and temporarily add it to the clan's in-game description.
2. Keep the word there until verification succeeds. Checking starts after about two minutes and continues periodically; the word expires after 30 minutes. If it expires, start again for a new word.
3. Once verified, remove the word from the clan description.

Verified clans reveal hidden account links in the clan roster and allow dashboard Links managers to add or remove unverified links for clan members. Verified player links remain protected.

## Organize and remove clans

Use **Manage categories** to create, rename, reorder, or delete categories. Deleting a category leaves its clans uncategorized. The clan list also supports searching and ordering clans within a category.

To remove a clan from the server, open **Configure**, select **Delete clan**, and confirm. This also deletes its associated reminders and logs.

## Other clan settings

You can configure these features separately for each clan:

- **Logs**: post clan activity and war updates to Discord. See [Setup logs](setup-logs.md).
- **Reminders**: remind players about wars, Raid Weekend, or Clan Games. See [Reminders](../server-setups/reminders.md).
- **War countdowns**: show the clan's war score or remaining war time in voice channels. Under **Logs**, select the clan and open **Countdowns**. See [Voice Countdowns](../server-setups/voice-countdowns.md).
- **Automatic war events**: create Discord events for visible regular and CWL wars. Find the switch under **Logs → select your clan → Countdowns**. The bot needs permission to create Discord events. Turning the setting off does not delete events that were already created.
