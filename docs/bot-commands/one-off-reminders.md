---
slug: /bot-commands/one-off-reminders
---

# 📳 One-off reminders

Use `/reminders` in Discord to send a single reminder immediately. This does not create a saved reminder or schedule. For automatic reminders, see [dashboard reminders](../dashboard/reminders.md).

## Send a reminder

Run `/reminders` in your server. You need the **Manage Server** permission.

- **type** (required): choose **War & CWL**, **Clan Games**, or **Raid Weekend**.
- **clan** (required): select the clan by name or tag.
- **channel** (optional): choose a text channel or thread in the server. If omitted, the reminder is sent in the current channel.
- **custom_text** (optional): add text below the reminder, up to 500 characters.

The bot checks the current event and lists players who still need to participate. For a war in preparation, it lists the upcoming roster instead. It mentions players whose accounts are linked and can be resolved in the server; other players are shown by name and tag. War reminders require an accessible war log. Clan Games and Raid Weekend reminders require the event to be active.
