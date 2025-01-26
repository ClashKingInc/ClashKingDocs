# 🏹 Link parse

## The goal

You can configure link parsing so that every message containing a link will be replaced with visual embeds, allowing you to see exactly what each link contains. To do this, use the `/setup link-parse` command.

{% hint style="info" %}
You can also do it manually for army links and base links (see [army-links.md](../utility/army-links.md "mention"))
{% endhint %}

## The command

`/setup link-parse`

## The Parameters

### Optional

* `{army_links}`: replace the army link by an embed.
* `{player_links}`: replace the player link by an embed.&#x20;
* `{clan_links}`: replace the clan link by an embed.&#x20;
* `{base_links}`: replace the base link with an embed. This requires an image and optionally a description text.
* `{show_parse}`: if turned on, it allows you to use -show PartOfTheNameOfOneOfYourClans to see an overview of this clan.
* `{manage_whitelist}`:  disable the link-parsing in certain channels.

## Examples

<details>

<summary>Army links</summary>

An army link will automatically convert into an embedded format, as shown in the example below.

![](<../.gitbook/assets/image (146).png>)

You can also do this manually with the [`/army link`](../utility/army-links.md) command.

</details>

<details>

<summary>Player links</summary>

A player link will automatically convert into an embedded format, as illustrated in the example below.

![](<../.gitbook/assets/image (140).png>)

</details>

<details>

<summary>Clan link</summary>

Clan links will automatically convert into an embedded format, as demonstrated below.

![](<../.gitbook/assets/image (139).png>)

</details>

<details>

<summary>Base links</summary>

Do you have a great base you'd like to share? Simply post a picture of the base along with the base link in a single message. Link parsing will transform it into a message, as shown in the example below. You can also include regular text in the message to appear above the embed, for example, mentioning the required Clan Castle defense!

![](<../.gitbook/assets/image (141).png>)

You can also use the [/base](../utility/base-links.md) command for creating such embeds!&#x20;

Base links will remain active for 90 days from the date of the last click.

</details>

<details>

<summary>Show parse</summary>

Have you added your clan to your Discord server (using [/addclan](../clan-setups/add-a-clan.md)) and want to quickly display an embed of your clan? You can do this with -shown NameOfTheClan. An embed will appear below the message, as illustrated in the example below.

![](<../.gitbook/assets/image (142).png>)

</details>

<details>

<summary>Manage whitelist</summary>

Do you want to disable link-parsing in certain channels? Use the optional `manage_whitelist` parameter to manage the whitelist. Link-parsing will only function in the channels you have added.

![](<../.gitbook/assets/image (143).png>)

</details>

