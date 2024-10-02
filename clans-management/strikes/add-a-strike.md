# 🎳 Add a strike

## The goal

When a player does not follow one of your clan rule, you can add a strike to warn them about it and keep track of this warning.

## The command

To add a strike use `/strike add` (this supports "smart search" so a username can work).&#x20;

{% hint style="info" %}
Strikes can be removed with `/strike remove {strike ID}`. This is not a user but the combination of letters/numbers for each strike, that you can find by using the [view-strikes.md](view-strikes.md "mention")command.
{% endhint %}

## The parameters

### Required

* `player`: Player username or tag. If you can't find the player name in the list, you can use their player tag, even if it's not on the list.
* `reason`: So you can remember why you ban them

### Optional

* `rollover_days`: The time that the strike is "active" for. Strikes that reach the rollover period wont delete but deactivate when viewing the players total strikes.
* `strike_weight`: It can be set to any value depending the the seriousness of the warning (default value of 1)
* `dm_player`: If you add a text, the bot will send a dm to the player with this text

The two optional fields are `{rollover_days}` and `{strike_weight}`.&#x20;

Strike\_weight has a default value of 1 but can be set to any value depending the the seriousness of the warning.&#x20;

Rollover\_days is the time that the strike is "active" for. Strikes that reach the rollover period wont delete but deactivate when viewing the players total strikes.
