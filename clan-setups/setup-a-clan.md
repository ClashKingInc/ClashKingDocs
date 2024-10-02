# ⚙️ Setup a clan

{% hint style="danger" %}
Before setting up a clan, make sure you [added it first](add-a-clan.md).
{% endhint %}

## The goal

This command will allow you to change settings you indicated on the /addclan command, but also to add new settings such as greeting messages, can name abbreviation, buttons to be shown on logs, etc.

## The command

`/setup clan`

{% hint style="info" %}
Before running that command, you need to create a leadership role from your discord server if you do not have one already. For example : @/coleader
{% endhint %}

## The parameters

### Required

`clan` : Of course you need to indicate which cln you want to set up.

### Optional

* `member_role`: The role that the members of this clan should receive. So on your discord, if the bot managed the roles, every person in this clan would get this role. Helpful if you are making clan specific channels.
* `leadership_role`: The role that any co-leaders & leader in this clan will receive. In a typical discord, you might have a lead chat for a clan or cumulative leader chat for all clans - this role may find use here.
* `clan_channel`: The channel you'll define will be the default channel for the bot will write in. For example, this is where it will great new users if you activate the option.
* `greeting`: You can choose an embed that the bot will send when a new member join your clan (if they have been linked to discord). To create an embed, please take a look at [embeds.md](../utility/embeds.md "mention")

{% hint style="info" %}
**Clan Greeting Conventions**

* `{user_mention}`
* `{user_display_name}`
* `{clan_name}`
* `{clan_link}`
* `{clan_leader_name}`
* `{clan_leader_mention}` (in a future update)
* `{player_name}`
* `{player_link}`
* `{player_townhall}`
* `{player_townhall_emoji}`
* `{player_league}`
* `{player_league_emoji}`
* `{player_trophies}`
{% endhint %}

* `auto_greet`: If you activate it, every time a new member join the clan, the bot will greet them if they are on the server. You can choose between **Never, First Join, Every Join** to indicate to the bot if it has to greet them, and if it has to greet them the first time they are seen in the clan or everytime they join.
* `category`: This is a way to organize your clans. Many clan families have 5 or more clans. Sometimes some are only for CWL or Event clans. You can use one of the preset options (**General, Feeder, War, Esport**) or type your own.
* `ban_alert_channel`:  You can choose in which channel the bot will warn you if someone that have been banned (see [bans.md](../clans-management/bans.md "mention")) join your clan.
* `clan_abbreviation`:  You can give a nickname to your clan so the members can have it in their name if you choose to activate the rename (see [setup-a-server.md](../server-setups/setup-a-server.md "mention"))
* `strike_button`:  Shows a strike button when someone leave your clan.
* `ban_button`:  Shows a ban button when someone leave your clan, so you can ban them easily after having kicked them.
* `profile_button`:  Shows a profile button when someone join your clan so you can access easily to their in game profile.

