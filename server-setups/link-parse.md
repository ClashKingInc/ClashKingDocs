# 🏹 Link parse

You can configure link parsing so that links are replaced with visual embeds, allowing you to see exactly what each link contains. To do this, use the `/setup link-parse` command.

**There are up to 5 parameters that you can set to on/off :**&#x20;

* `{army_links}` : replace the army link by an embed. Can be used with [#army-link](link-parse.md#army-link "mention")if turned off.
* `{player_links}` : replace the player link by an embed.&#x20;
* `{clan_links}` : replace the clan link by an embed.&#x20;
* `{base_links}` : replace the base link by an embed. Can be used with [#base-base\_link-description-photo](link-parse.md#base-base\_link-description-photo "mention") if turned off.
* `{show_parse}` : if turned on, it allows you to use -show PartOfTheNameOfOneOfYourClans to see an overview of this clan.

<details>

<summary><code>/army link</code></summary>

For exemple, if you share this army :&#x20;

https://link.clashofclans.com/fr?action=CopyArmy\&army=u2x0-3x1-4x5-3x6-5x7-4x10-1x23-3x28-1x53-1x58-2x82-1x97-5x110-2x55s3x2-2x5-1x9-1x53

It will be replace by this :&#x20;

![](<../.gitbook/assets/image (76).png>)

</details>

<details>

<summary><code>/base {base_link} {description} {photo}</code></summary>

This will show the photo of the base with the link and download stats but also allow people to leave feedbacks on it.

![](<../.gitbook/assets/image (78).png>)

</details>
