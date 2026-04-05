# 🚪 Interdictions

## Le but

La commande ban peut être très utile pour créer une liste de membres que vous ne voudriez pas renvoyer.

Une fois que vous avez ajouté un ban, le ban sera envoyé dans le canal que vous avez défini dans [setup-a-server.md](../server-setups/setup-a-server.md "mention"), donc pas besoin d'exécuter la commande sur un canal spécifique !

Si un joueur banni rejoint l'un de vos clans, un avertissement sera envoyé au canal que vous avez défini dans [setup-a-clan.md](../clan-setups/setup-a-clan.md "mention").
:::warning
L’utilisation de la commande bannir ne leur interdira pas de rejoindre votre clan. Ceci est hors du contrôle des robots.
:::

## La commande

Pour ajouter un utilisateur à la liste, utilisez `/ban add` (cela prend en charge la "recherche intelligente" afin qu'un nom d'utilisateur puisse fonctionner).
:::info
Toutes les interdictions peuvent être consultées à l'aide de `/ban list` et une interdiction peut être supprimée à l'aide de `/ban remove`.
:::

## Les paramètres

### Requis

`player` : nom d'utilisateur ou tag du joueur. Si vous ne trouvez pas le nom du joueur dans la liste, vous pouvez utiliser son tag de joueur, même s'il ne figure pas dans la liste.

### Facultatif

* `reason` : Vous pouvez ainsi vous rappeler pourquoi vous les interdisez.
* `dm_player` : Si vous ajoutez un texte, le bot enverra un DM au joueur avec ce texte.

