# 🎁 Cadeaux

Voulez-vous redonner certaines choses à votre communauté? Organisez maintenant vos propres cadeaux !&#x20;

Il est possible de programmer les cadeaux à l'avance ! Les poids peuvent également être ajustés en fonction des rôles. Par exemple, les joueurs à long terme peuvent avoir une chance plus élevée ([/role tenure](../players-roles/roles-th-and-more/tenure-role.md) pour les configurer).
:::info
Cette fonctionnalité est assez nouvelle ! Signaler des bogues ou des suggestions de fonctionnalités dans [the discord!](https://discord.clashk.ing/)
:::

## Gérer les cadeaux

Vous pouvez gérer vos cadeaux à l'aide d'un tableau de bord de page Web. Vous pouvez obtenir le lien avec la commande `/giveaway dashboard`.  Ce lien expirera 1 heure après avoir exécuté la commande.
:::info
Vous avez besoin des autorisations de gestion du serveur pour accéder au tableau de bord. Pour accorder l'accès à d'autres personnes ou à un rôle spécifique (comme un gestionnaire de cadeaux), utilisez la commande [**/whitelist add** ](../server-setups/whitelist.md).
:::

<figure><img src="/img/gitbook/image (132).png" alt="" /><figcaption><p>Get the dashboard link using /giveaway dashboard</p></figcaption></figure>

Cliquez sur **créer un cadeau** pour créer un nouveau cadeau. Entrez les détails, tels que le prix, les heures de début et de fin, ainsi qu'un message ou une image personnalisée !

<figure><img src="/img/gitbook/image (135).png" alt="" width="261" /><figcaption><p>You can customize the giveaway with the dashboard!</p></figcaption></figure>

### Conditions requises pour les cadeaux

Il est possible de fixer certaines exigences pour les cadeaux.  Ces exigences permettront d’attribuer une plus grande pondération à des utilisateurs spécifiques en fonction de leurs rôles. De plus, cela permet d’empêcher les robots de participer à des cadeaux. Actuellement, nous avons les exigences suivantes :

* L'utilisateur doit avoir une photo de profil Discord
* L'utilisateur doit avoir un compte Clash of Clans lié au bot ClashKing (en utilisant [/link](../clan-setups/link-players/))
* Autoriser uniquement les utilisateurs ayant un certain rôle à participer
* Ou ajustez les chances pour un certain rôle

## Exemple de cadeau

<figure><img src="/img/gitbook/image (147).png" alt="" width="275" /><figcaption><p>Example of a giveaway</p></figcaption></figure>
:::info
Le bouton de participation sera mis à jour 60 secondes après le dernier clic.
:::

## Relancez les cadeaux

Il est également possible de relancer certains gagnants du concours.

### La commande

`/giveaway reroll {giveaway name} {users_to_replace}`

#### Les paramètres

#### Requis

* `giveaway name` : nom du cadeau
* `users_to_replace` : mention des utilisateurs à remplacer par un nouveau gagnant.

#### Facultatif

* `reason` : raison de la relance.&#x20;