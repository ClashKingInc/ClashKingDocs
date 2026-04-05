# 🤓 Actualisation automatique

## Le but

Actualisez automatiquement les rôles et le surnom lorsque le statut d'un utilisateur change dans le jeu.

## Les commandes

`/autorefresh triggers` vous permet de choisir dans quel scénario le rafraîchissement aura lieu

<figure><img src="/img/docs-media/image (94).png" alt="" /><figcaption></figcaption></figure>

`/autorefresh option` permet de choisir ce qui sera rafraîchi lorsqu'un déclencheur est activé.

<figure><img src="/img/docs-media/image (116).png" alt="" /><figcaption></figcaption></figure>
:::info
Si vous souhaitez actualiser manuellement, veuillez utiliser `/refresh`
:::

## Déclencheur d'actualisation automatique&#x20;

### Paramètres

Aucun paramètre requis.

### Types de déclencheurs

* Rejoindre un membre
* Congé des membres
* Changement de mairie
* Changement de ligue
* Changement de rôle

## Options d'actualisation automatique

* `state` : définir l'actualisation automatique sur ON/OFF
* `role_treatment` : Il ajoutera et /or supprimera un rôle en fonction du rôle que vous avez défini dans [Roles (TH & More)](roles-th-and-more/README.md).
* `nickname_change` : Cela changera le surnom en fonction des surnoms que vous avez définis dans [Set up a server](../server-setups/setup-a-server.md).
* `blacklist_role_add` : Une personne ayant un rôle sur liste noire ne sera pas impactée par l'autorefresh (elle conservera ses rôles et pseudos)
* `blacklist_role_remove` : Vous pouvez supprimer un rôle qui a été configuré dans `blacklist_role_add`.
* `change_log` : Si vous souhaitez voir les modifications apportées par le bot, vous pouvez définir un canal sur lequel il enverra les journaux de ses activités.