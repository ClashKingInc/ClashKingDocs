---
slug: /bot-commands/buttons
---

# 🔘 Member buttons

Use `/buttons` in a Discord server to create a panel that helps members link accounts, refresh roles, check tasks, or view their rosters.

## Create a panel

You need **Panels → Manage** dashboard access or server management permissions. Run `/buttons` in the channel where you want to post the panel. All options are optional:

- **embed**: select a saved classic embed. Without one, ClashKing creates a default message.
- **button_color**: choose Blue, Green, Grey, or Red. The default is Grey.
- **on_welcome_channel**: select a channel for a panel sent when someone joins. Without it, the panel is posted in the current channel.

Choose one to four buttons from the menu to finish. For example, choose **Link Button** and **Link Help Button** to help new members connect their accounts. The selection expires after ten minutes; run the command again if needed.

## Available buttons

- **Link Button**: opens the account-linking form.
- **Link Help Button**: shows help with linking.
- **Refresh Button**: refreshes the member's roles and nickname according to server settings.
- **To-Do Button**: shows the member's account tasks privately.
- **Roster Button**: shows the member's roster memberships privately.

Each button acts for the member who clicks it. See [Link players](link-players.md), [Manual refresh](../players-roles/manual-refresh-roles-and-nicknames.md), and [Rosters](../clans-management/rosters/README.md) for more information.
