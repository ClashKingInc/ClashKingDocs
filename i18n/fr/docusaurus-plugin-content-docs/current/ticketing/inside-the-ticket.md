---
description: Actions you can perform inside a ticket
---
# 🎫 À l'intérieur du billet

## Messages relatifs aux billets

Il s'agit d'une nouvelle fonctionnalité et l'une de mes préférées. Parfois, vous avez des messages que vous répétez encore et encore aux demandeurs de billets, comme peut-être (à une échelle basique) "Voici le clan A, et voici le lien pour le rejoindre..."\
\
Eh bien, vous pouvez désormais automatiser cela et cela prend en charge les conventions de remplacement ! Voici les options disponibles :

<details>

<summary>Options de convention de remplacement</summary>

* `{ticket_count}`
* `{ticket_status}`
* `{ticket_emoji_status}`
* `{ticket_channel_mention}`
* `{user_name}`
* `{user_mention}`
* `{server_name}`
* `{server_member_count}`
* `{account_name}`
* `{account_th}`
* `{account_heroes}`
* `{clan_name}`
* `{clan_level}`
* `{clan_badge_emoji}`
* `{clan_link}`
* `{clan_location}`
* `{clan_member_count}`
* `{clan_leader}`
* `{clan_leader_mention}`
* `{clan_tag}`
* `{clan_war_league}`
* `{clan_capital_league}`

</details>
:::info
Les conventions de remplacement avec "clan" dans le nom nécessiteront l'utilisation du bouton "Définir le clan", afin qu'il sache à quel clan il a affaire.
:::

<figure><img src="/img/gitbook/image (25) (1) (1).png" alt="" /><figcaption><p>an example ticket message that is filled in dynamically</p></figcaption></figure>
