---
description: Adding a clan is easy! Here is how to get started!
---

# ➕ Add a Clan

{% hint style="danger" %}
Before adding a clan, make sure you [invited ClashKing Bot](https://invite.clashk.ing) first and give it admin perms.
{% endhint %}

## The goal

Adding a clan to your server allows you to manage it directly from Discord. Once your clan is added, it will be tracked by our system, giving you clear insights into what’s happening within your clan and providing powerful tools to manage it efficiently.

## The command

For that, you must use the `/addclan` command.

{% hint style="info" %}
Before running that command, you need to create a membership role (and optionally a leadership role) from your discord server if you do not have one already. For example : @/member (and @/coleader)
{% endhint %}

## The parameters

### Required

* `clan_tag` : This is the unique tag used to identify a clan. It can be found in-game underneath the clan name.&#x20;
* `category`: This is a way to organize your clans. Many clan families have 5 or more clans. Sometimes some are only for CWL or Event clans. You can use one of the preset options (**General, Feeder, War, Esport**) or type your own.
* `member_role`: The role that the members of this clan should receive. So on your discord, if the bot managed the roles, every person in this clan would get this role. Helpful if you are making clan specific channels.
* `clan_channel`: This channel should be one of the channel your clan mates has access to. This is where the bot will send welcome messages.

### Optional

`leadership_role`: The role that any co-leaders & leader in this clan will receive. In a typical discord, you might have a lead chat for a clan or cumulative leader chat for all clans - this role may find use here.

{% hint style="info" %}
You can remove a clan from the server with the `/removeclan` command!
{% endhint %}

## Once you're done

After filling these in, you should get a success message showing what you have set up. \
You can continue with setting up some logs or other setups, but this alone will let you use a large portion of the "static" commands & will start tracking wars, donations, activity & more for your clan!
