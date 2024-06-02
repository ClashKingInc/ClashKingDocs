# ⚙️ Setup a server

The `/setup server` allows you to set the basis on how the bot will behave in your server.

**In this command, there is 10 parameters :**

<details>

<summary>ban_log_channel</summary>

When you ban someone with the `/ban` command (see [bans.md](../punishment-management/bans.md "mention")), it will automatically send a message in the channel you choose.

<img src="../.gitbook/assets/image (3).png" alt="" data-size="original">

</details>

<details>

<summary>strike_log_channel</summary>

As for the ban command, when you want to add a strike to someone with the `/strike` command (see [strikes.md](../punishment-management/strikes.md "mention")), it will automatically send a message in the channel you choose.![](<../.gitbook/assets/image (4).png>)

</details>

<details>

<summary>change_nicknames</summary>

By choosing yes or no, you allow or not the bot to manage the nicknames of your clan members. You can set the nicknames with [#family\_nickname\_convention](setup-a-server.md#family\_nickname\_convention "mention")and [#non\_family\_nickname\_convention](setup-a-server.md#non\_family\_nickname\_convention "mention").

</details>

<details>

<summary>family_nickname_convention</summary>

If you allowed the bot to change the nickname of the members of you server ([#change\_nicknames](setup-a-server.md#change\_nicknames "mention")) , you can choose how the members of your clans family will be renamed.

Here are the possibilities :

* `{discord_name}`
* `{discord_display_name}`
* `{player_name}`
* `{player_tag}`
* `{player_townhall}`
* `{player_townhall_small}` (this is a superscript like ¹⁶)
* `{player_warstars}`
* `{player_role}`
* `{player_clan}`
* `{player_league}`
* `{player_clan_abbreviation}`

For example, if you set the convention to `{player_name}{player_townhall_small} | {player_clan_abbreviation}`, it will look like this : `CodeClashKing¹⁶ | GC`

</details>

<details>

<summary>non_family_nickname_convention</summary>

This is the same thing that [#family\_nickname\_convention](setup-a-server.md#family\_nickname\_convention "mention")but for members of your server that are not in one of your clans.

</details>

<details>

<summary>flair_non_family</summary>

You can choose whether or not to give “flair” roles (townhall, league, etc) to non family members

</details>

<details>

<summary>api_token</summary>

Choose if player has to give an api\_token when they use the `/link command` ([link-unlink-players.md](../clan-setups/link-unlink-players.md "mention")).

</details>

<details>

<summary>leadership_eval</summary>

You can choose if leader and co-leader should be excluded from eval settings.

</details>

<details>

<summary>full_whitelist_role</summary>

Give the right to the users having this special role to run every bot commands. Use it with caution : "With great power comes great responsibility".

</details>

<details>

<summary>embed_color</summary>

Choose the colors of the embed sent by the bot.

</details>

{% hint style="danger" %}
You need to turn on `/setup autoeval {option}` to let the bot run correctly.

If the bot do not update content correctly, please check that autoeval is turned on.
{% endhint %}
