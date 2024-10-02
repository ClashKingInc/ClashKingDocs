# ⚙️ Setup a server

{% hint style="danger" %}
You need to turn on `/setup autoeval {option}` to let the bot run correctly.

If the bot do not update content correctly, please check that autoeval is turned on.
{% endhint %}

## The goal

This command will allow you to set the basis on how the bot will behave on your server.

## The command

`/setup server`

<figure><img src="../.gitbook/assets/image (128).png" alt=""><figcaption></figcaption></figure>

## The parameters

### Required

No required parameters.

### Optional

* `ban_log_channel`: When you ban someone with the `/ban` command (see [bans.md](../clans-management/bans.md "mention")), it will automatically send a message in the channel you choose.
* `strike_log_channel`: As for the ban command, when you want to add a strike to someone with the `/strike` command (see [strikes](../clans-management/strikes/ "mention")), it will automatically send a message in the channel you choose.
* `change_nicknames`: By choosing yes or no, you allow or not the bot to manage the nicknames of your clan members. You can set the nicknames with `family_nickname_convention` and `non family_nickname_convention.`
* `family_nickname_convention`: If you allowed the bot to change the nickname of the members of you server , you can choose how the members of your clans family will be renamed.
* `non_family_nickname_convention`:  This is the same thing that `family_nickname_convetion` but for members of your server that are not in one of your clans.

{% hint style="info" %}
**Nickname Conventions**

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
{% endhint %}

* `flair_non_family` : You can choose whether or not to give “flair” roles (townhall, league, etc) to non family members.
* `api_token`: Choose if player has to give an api\_token when they use the `/link command` ([link-players.md](../clan-setups/link-players.md "mention")).
* `leadership_eval`: You can choose if leader and co-leader should be excluded from eval settings (see [manual-refresh-roles-and-nicknames.md](../players-roles/manual-refresh-roles-and-nicknames.md "mention") & [auto-refresh.md](../players-roles/auto-refresh.md "mention"))
* `full_whitelist_role`: Give the right to the users having this special role to run every bot commands. Use it with caution : "With great power comes great responsibility".
* `embed_color`:  Choose the colors of the embed sent by the bot.
* `followed_reddit_accounts`: You can get log posts for comments by certain users on the recruitment subreddit. You ust have reddit feed setup (see [reddit-recruit-feed-english-speaking-only.md](reddit-recruit-feed-english-speaking-only.md "mention")) and can use a comma to add several accounts to follow.
