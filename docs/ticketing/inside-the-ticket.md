---
description: Actions you can perform inside a ticket
---

# 🎫 Inside the Ticket

## Ticket Messages

This is a new feature & one of my favorite. Sometimes you have messages you repeat over & over to ticket applicants, like maybe (on a basic scale) "Here is Clan A, and this is the link to join it..."\
\
Well, now you can automate that, and it supports replacement conventions! Here are the available options:

<details>

<summary>Replacement Convention Options</summary>

* `{ticket_count}`
* `{ticket_status}`
* `{ticket_emoji_status}`
* `{ticket_channel_mention}`
* `{user_name}`
* `{user_mention}`
* `{server_name}`
* `{server_member_count}`
* `{account_name}`
* `{account_th}`
* `{account_heroes}`
* `{clan_name}`
* `{clan_level}`
* `{clan_badge_emoji}`
* `{clan_link}`
* `{clan_location}`
* `{clan_member_count}`
* `{clan_leader}`
* `{clan_leader_mention}`
* `{clan_tag}`
* `{clan_war_league}`
* `{clan_capital_league}`

</details>

:::info
The replacement conventions with "clan" in the name, will require the "Set Clan" button to be used, so it knows what clan it is dealing with
:::

<figure><img src="../.gitbook/assets/image (25) (1) (1).png" alt="" /><figcaption><p>an example ticket message that is filled in dynamically</p></figcaption></figure>
