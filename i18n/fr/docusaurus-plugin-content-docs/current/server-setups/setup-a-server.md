# ⚙️ Configurer un serveur
:::warning
Vous devez activer `/autorefresh options {state}` pour permettre au bot de fonctionner correctement.

Si le bot ne met pas à jour le contenu correctement, veuillez vérifier que l'état est activé.
:::

## Le but

Cette commande vous permettra de définir les bases du comportement du bot sur votre serveur.

## La commande

`/setup server`

<figure><img src="/img/docs-media/image (128).png" alt="" /><figcaption></figcaption></figure>

## Les paramètres

### Requis

Aucun paramètre requis.

### Facultatif

* `ban_log_channel` : Lorsque vous bannissez quelqu'un avec la commande `/ban` (voir [bans.md](../clans-management/bans.md "mention")), il enverra automatiquement un message dans le canal que vous choisissez.
* `strike_log_channel` : Quant à la commande de bannissement, lorsque vous souhaitez ajouter un avertissement à quelqu'un avec la commande `/strike` (voir [strikes](../clans-management/strikes/ "mention")), elle enverra automatiquement un message dans le canal que vous choisissez.
* `change_nicknames` : En choisissant oui ou non, vous autorisez ou non le bot à gérer les pseudos des membres de votre clan. Vous pouvez définir les surnoms avec `family_nickname_convention` et `non family_nickname_convention.`
* `family_nickname_convention` : Si vous avez autorisé le bot à changer le pseudo des membres de votre serveur, vous pouvez choisir comment les membres de votre famille de clans seront renommés.
* `non_family_nickname_convention` : C'est la même chose que `family_nickname_convetion` mais pour les membres de votre serveur qui ne font pas partie d'un de vos clans.
:::info
**Conventions sur les surnoms**

* `{discord_name}`
* `{discord_display_name}`
* `{player_name}`
* `{player_tag}`
* `{player_townhall}`
* `{player_townhall_small}` (c'est un exposant comme ¹⁶)
* `{player_warstars}`
* `{player_role}`
* `{player_clan}`
* `{player_league}`
* `{player_clan_abbreviation}`
:::

* `flair_non_family` : Vous pouvez choisir de donner ou non des rôles « flair » (mairie, ligue, etc) à des personnes non membres de la famille.
* `api_token` : Choisissez si le joueur doit donner un api\_token lorsqu'il utilise le `/link command` ([link-players](../clan-setups/link-players/ "mention")).
* `leadership_eval` : vous pouvez choisir si le leader et le co-leader doivent être exclus des paramètres d'évaluation (voir [manual-refresh-roles-and-nicknames.md](../players-roles/manual-refresh-roles-and-nicknames.md "mention") et [auto-refresh.md](../players-roles/auto-refresh.md "mention")).
* `full_whitelist_role` : Donnez le droit aux utilisateurs ayant ce rôle spécial d'exécuter toutes les commandes du bot. Utilisez-le avec prudence : « Un grand pouvoir implique de grandes responsabilités ».
* `embed_color` : Choisissez les couleurs de l'intégration envoyée par le bot.
* `followed_reddit_accounts` : vous pouvez obtenir des articles de journal pour les commentaires de certains utilisateurs sur le subreddit de recrutement. Vous devez avoir configuré le flux Reddit (voir [reddit-recruit-feed.md](reddit-recruit-feed.md "mention")) et pouvez utiliser une virgule pour ajouter plusieurs comptes à suivre.