# 🤓 Auto-refresh

## Triggers

`/autorefresh triggers` will automatically refresh roles and nickname when the status of a user changes in game.

<figure><img src="../.gitbook/assets/image (94).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
If you want to refresh manually, please use `/refresh`
{% endhint %}

## Options

The `/autorefresh` option allows you to choose what will be refreshed when a trigger set in [#triggers](auto-refresh.md#triggers "mention")is activated.

<figure><img src="../.gitbook/assets/image (93).png" alt=""><figcaption></figcaption></figure>

<details>

<summary>role_treatment</summary>

It will add and/or remove a role depending on the role you set up in [Broken link](broken-reference "mention").

</details>

<details>

<summary>nickname_change</summary>

It will change the nickname depending on the nicknames you set in [Broken link](broken-reference "mention").

</details>

<details>

<summary>blacklist_role_add</summary>

A person with a blacklisted role will not be impacted by autorefresh (they'll keep their roles and nicknames)

</details>

<details>

<summary>blacklist_role_remove</summary>

You can remove a role that has been setup in [#blacklist\_role\_add](auto-refresh.md#blacklist\_role\_add "mention")

</details>

<details>

<summary>change_log</summary>

If you want to see the changes the bot makes, you can set a channel where it will send logs of its activities.

</details>
