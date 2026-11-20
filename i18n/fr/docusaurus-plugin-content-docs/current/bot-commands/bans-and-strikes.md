---
description: Gérez les bans et strikes dans Discord ou le tableau de bord.
---

# 🚪 Bans & strikes

Les bans et strikes permettent de conserver les notes de modération des joueurs sur votre serveur. Un ban indique qu'un joueur ne doit pas revenir ; un strike enregistre un avertissement, par exemple pour une infraction aux règles du clan.

:::info
Un ban ClashKing n'empêche **pas** un joueur de rejoindre un clan. Pour recevoir un avertissement lorsqu'un joueur banni rejoint un clan, activez **Ban Alerts** pour ce clan sous **Logs**. Consultez [Configurer les logs](../use-the-dashboard/setup-logs.md).
:::

## Ajouter un dossier

Utilisez `/record add` sur votre serveur Discord et indiquez :

- **player_tag** : le tag du joueur Clash of Clans.
- **type** : choisissez **Ban** ou **Strike**.

Saisissez une **Reason** dans le formulaire. Pour un strike, vous pouvez également définir un **Strike weight** (1 par défaut) et une expiration facultative en jours. Par exemple, utilisez un poids de 2 pour un avertissement plus grave. Laissez l'expiration vide si le strike ne doit pas expirer. Pour les deux types, vous pouvez joindre une image de preuve : PNG, JPEG, GIF ou WebP jusqu'à 10 Mo.

## Consulter et supprimer les dossiers

Utilisez `/record list` pour afficher les bans et strikes. Choisissez éventuellement **type** pour filtrer les bans ou les strikes. Le résultat propose des commandes pour naviguer, actualiser et supprimer des dossiers.

Pour en supprimer un directement, utilisez `/record remove`, choisissez son **type** et sélectionnez le **record** parmi les suggestions. Ces commandes Discord nécessitent **Gérer le serveur** ou **Administrateur**.

## Gérer les dossiers dans le tableau de bord

Ouvrez le tableau de bord, sélectionnez votre serveur et choisissez **Bans & Strikes** sous **Management**. Les onglets **Bans** et **Strikes** permettent de rechercher, trier, ajouter et supprimer des dossiers ; les strikes peuvent aussi être affichés par joueur.

Pour ajouter un dossier dans le tableau de bord, saisissez un tag et une raison. Les strikes ont aussi un poids et une expiration facultative. Vous pouvez ajouter l'URL d'une image de preuve accessible publiquement.
