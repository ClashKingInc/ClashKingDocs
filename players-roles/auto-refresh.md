# 🤓 Auto-refresh

## The goal

Automatically refresh roles and nickname when the status of a user changes in game.

## The commands

`/autorefresh triggers` allows you to choose in which scenario the refresh will happen

<figure><img src="../.gitbook/assets/image (94).png" alt=""><figcaption></figcaption></figure>

`/autorefresh option` allows you to choose what will be refreshed when a trigger is activated.

<figure><img src="../.gitbook/assets/image (116).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
If you want to refresh manually, please use `/refresh`
{% endhint %}

## Autorefresh Trigger&#x20;

### Parameters

No parameters needed.

### Trigger types

* Member Join
* Member Leave
* TownHall Change
* League Change
* Role Change

## Autorefresh options

* `state` : set autorefresh to ON/OFF
* `role_treatment` : It will add and/or remove a role depending on the role you set up in [Broken link](broken-reference "mention").
* `nickname_change` : It will change the nickname depending on the nicknames you set in [Broken link](broken-reference "mention").
* `blacklist_role_add` : A person with a blacklisted role will not be impacted by autorefresh (they'll keep their roles and nicknames)
* `blacklist_role_remove` : You can remove a role that has been setup in [#blacklist\_role\_add](auto-refresh.md#blacklist\_role\_add "mention")
* `change_log` : If you want to see the changes the bot makes, you can set a channel where it will send logs of its activities.
