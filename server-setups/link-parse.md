# 🏹 Link parse

## The goal

You can configure link parsing so that every message containing a link will be replaced with visual embeds, allowing you to see exactly what each link contains. To do this, use the `/setup link-parse` command.

{% hint style="info" %}
You can also do it manually for army links and base links (see [army-links.md](../utility/army-links.md "mention"))
{% endhint %}

## The command

`/setup link-parse`

<figure><img src="../.gitbook/assets/image (14).png" alt="" width="222"><figcaption><p>Auto parsing of army links</p></figcaption></figure>

<figure><img src="../.gitbook/assets/image (16).png" alt="" width="493"><figcaption><p>Auto parsing of base links</p></figcaption></figure>

## The Parameters

### Optional

* `{army_links}` : replace the army link by an embed.
* `{player_links}` : replace the player link by an embed.&#x20;
* `{clan_links}` : replace the clan link by an embed.&#x20;
* `{base_links}` : replace the base link by an embed.
* `{show_parse}` : if turned on, it allows you to use -show PartOfTheNameOfOneOfYourClans to see an overview of this clan.
