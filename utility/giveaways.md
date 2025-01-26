# 🎁 Giveaways

Do you want to give some things back to your community? Host now your own giveaways!&#x20;

It is possible to schedule the giveaways beforehand! Weights can also be adjusted based on roles. For instance, long-term players can be given a higher chance ([/role tenure](../players-roles/roles-th-and-more/tenure-role.md) to set those up).

{% hint style="info" %}
This feature is quite new! Report bugs or feature suggestions in [the discord!](https://discord.clashk.ing/)
{% endhint %}

## Manage giveaways

You can manage your giveaways using a webpage dashboard. You can get the link with the command `/giveaway dashboard`.  This link will expire 1 hour after you executed the command.

{% hint style="info" %}
You need the Manage Server perms to have acces to the dashboard. To grant access to others or a specific role (such as a giveaways manager), use the [**/whitelist add** ](../server-setups/whitelist.md)command
{% endhint %}

<figure><img src="../.gitbook/assets/image (132).png" alt=""><figcaption><p>Get the dashboard link using /giveaway dashboard</p></figcaption></figure>

Click on the **create giveaway** to create a new giveaway. Enter the details, such as the prize, start and end times, along with a custom message or image!

<figure><img src="../.gitbook/assets/image (135).png" alt="" width="261"><figcaption><p>You can customize the giveaway with the dashboard!</p></figcaption></figure>

### Giveaway requirements

It is possible set certain requirements for the giveaways.  Those requirements will allow for assigning greater weighting to specific users based on their roles. Additionally, it helps to prevent bots from participating in giveaways. Currently we have the following requirements:

* User must have a discord profile picture
* User must have a Clash of Clans account linked to the ClashKing bot (using [/link](../clan-setups/link-players/))
* Only allow users with a certain role to participate
* Or adjust the odds for a certain role

## Example of a giveaway

<figure><img src="../.gitbook/assets/image (147).png" alt="" width="275"><figcaption><p>Example of a giveaway</p></figcaption></figure>

{% hint style="info" %}
The participate button will update 60 seconds after the last click.&#x20;
{% endhint %}

## Reroll giveaways

It is also possible to reroll certain giveaway winners.

### The command

`/giveaway reroll {giveaway name} {users_to_replace}`

#### The parameters

#### Required

* `giveaway name`:  name of the giveaway
* `users_to_replace`: mention of the users to replace with a new winner.

#### Optional

* `reason`:  reason of the reroll.&#x20;

