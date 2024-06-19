# ⚙️ Setup a clan

## Basic settings

Assuming you have already added a clan to your sever (see [add-a-clan.md](add-a-clan.md "mention")), you can now configure basic settings for the bot to help you manage your clan with the `/setup clan` command\
\
**Inside this slash command there are 5 fields:**

<details>

<summary>clan</summary>

Obviously the name of the clan you want to setup.

</details>

<details>

<summary>member_role</summary>

Allows you to provide a role every members of your clan will be provided.&#x20;

</details>

<details>

<summary>leadership_role</summary>

Allows you to provide a role every leader/co-leaders of your clan will be provided.&#x20;

</details>

{% hint style="info" %}
The @/everyone role can't be chosen as a member\_role or leadership\_role.
{% endhint %}

<details>

<summary>clan_channel</summary>

Set the default channel the bot will write in, to greet the new user for example.

</details>

<details>

<summary>greeting</summary>

Let you choose an embed that the bot will send when a new member join your clan (if they have been linked to discord).

To create an embed, please take a look at [embeds.md](../utility/embeds.md "mention")

</details>

<details>

<summary>auto_greet</summary>

Choose if new members should be greeted each time they join, only the first time or never.

</details>

<details>

<summary>category</summary>

Choose the clan category between General, War and E-Sport.

</details>

<details>

<summary>ban_alert_channel</summary>

Choose in which channel the bot will warn you if someone that have been banned (see [bans.md](../punishment-management/bans.md "mention")) join your clan.

</details>

<details>

<summary>clan_abbreviation</summary>

You can give a nickname to your clan so the members can have it in their name if you choose to activate the rename (see [setup-a-server.md](../server-setups/setup-a-server.md "mention"))

</details>

<details>

<summary>strike_button</summary>

Shows a strike button when someone leave your clan.

</details>

<details>

<summary>ban_button</summary>

Shows a ban button when someone leave your clan, so you can ban them easily after having kicked them.

</details>

<details>

<summary>profile_button</summary>

Shows a profile button when someone join your clan so you can access easily to their in game profile.

</details>

## Members threshold warning

If you want to be warned when the number of members in the clan reaches a threshold, either above or below a specified number, you can use the `/setup member count warning {clan} {below} {above} {channel}` command.
