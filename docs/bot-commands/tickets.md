---
description: Set up tickets in the dashboard and manage them in Discord.
slug: /bot-commands/tickets
---

# 🎫 Tickets

Tickets let server members contact staff through a dedicated Discord channel. Configure ticket panels in the dashboard, then use the commands below inside an existing ticket. Ticket actions require the appropriate ticket staff permissions.

## Set up a ticket panel

1. Open the dashboard, select your server, and choose **Tickets** under **Management**.
2. Under **Panels**, click **New panel** and give it a name. Open **Configure** for the new panel.
3. Configure the panel's ticket categories and log channels. Under **Ticket actions**, add actions and configure options such as staff roles, account requirements, opening messages, and questions.
4. Compose the panel message and connect its buttons or menu options to the ticket actions. Save the draft, then choose **Publish saved changes** and select a Discord channel when posting it for the first time.

You can also prepare reusable messages under **Shared messages**. Saving changes to a panel draft does not automatically update the live Discord message; publish the saved changes when ready.

## Change a ticket's status

Use `/ticket status` inside the ticket and select **status**:

- **open**: open the ticket.
- **sleep**: put the ticket to sleep and hide the ticket channel from the applicant.
- **close**: close the ticket after confirmation. The Discord ticket channel is permanently deleted; a transcript is saved first if transcripts are enabled.

## Add a member

Use `/ticket add` inside the ticket and select a Discord **member** to give them access to that ticket.

## Send a shared message

Create a message in **Tickets → Shared messages** in the dashboard first. Then use `/ticket messages` inside a ticket to select and send it. If the template has custom questions, fill those in when prompted.

## Manage tickets in the dashboard

Under **Management → Tickets**, open a panel and select its ticket history to find existing tickets. Depending on the ticket and your permissions, you can review details, change an open ticket's status, and access available transcripts. Closing a ticket requires confirmation and deletes its Discord channel; transcript availability depends on the panel settings.

Use the panel's other tabs to manage its message, ticket actions, categories, log channels, and settings. Save and publish message changes when you want to update the live panel.
