# 🚪 Bans

## The goal

The ban command can be very useful to create a list of members that you would not want to return.

Once you add a ban, the ban will be sent in the channel you set in [setup-a-server.md](../server-setups/setup-a-server.md "mention"), so no need to run the command on a specific channel !

If a banned player join one of your clan, a warning will be sent to the channel you set in [setup-a-clan.md](../clan-setups/setup-a-clan.md "mention")

{% hint style="warning" %}
Using the ban command will not ban them from joining your clan. This is out of the bots control.
{% endhint %}

## The command

To add a user to the list use `/ban add` (this supports "smart search" so a username can work).&#x20;

{% hint style="info" %}
All bans can be viewed using `/ban list` and a ban can be removed using `/ban remove`
{% endhint %}

## The parameters

### Required

`player` : player username or tag. If you can't find the player name in the list, you can use their player tag, even if it's not on the list.

### Optional

* `reason`: So you can remember why you ban them.
* `dm_player`: If you add a text, the bot will send a dm to the player with this text.

