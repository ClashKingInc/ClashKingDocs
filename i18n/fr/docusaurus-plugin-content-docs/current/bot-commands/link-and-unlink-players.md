---
slug: /bot-commands/link-and-unlink-players
description: Associez des comptes Clash of Clans à Discord et gérez les liens.
---

# 🔗 (Un)link players

Associez vos comptes Clash of Clans à Discord pour que ClashKing reconnaisse vos joueurs, notamment pour les rôles, les rappels et les inscriptions aux rosters. Chaque joueur peut associer ses propres comptes avec les commandes ci-dessous.

## Associer votre compte

1. Exécutez `/link add` sur votre serveur Discord.
2. Saisissez votre **tag de joueur** (par exemple `#PVJ98GL`) et votre **token API** Clash of Clans dans le formulaire. Le tag se trouve sur votre profil dans le jeu et le token API dans les paramètres du jeu.
3. Envoyez le formulaire et vérifiez la confirmation. Répétez pour chaque compte à associer.

:::info
Le token API confirme que vous possédez le compte de jeu. Saisissez-le dans le formulaire du bot ; le bot ne le conserve pas.
:::

## Supprimer une association

Exécutez `/link remove` et sélectionnez l'un de vos comptes liés comme **player**. Cela supprime votre propre association.

## Choisir un compte principal

Exécutez `/link set-main` et sélectionnez l'un de vos comptes liés visibles. Ce choix est propre au serveur Discord actuel et sert notamment à l'actualisation des surnoms.

## Voir les comptes liés

Exécutez `/link list` pour voir vos propres comptes liés visibles. Pour une autre vue, indiquez l'un de ces champs facultatifs :

- **discord_user** : affiche les comptes liés visibles de cet utilisateur.
- **clan** : affiche les liens d'un clan ajouté à ce serveur, notamment les joueurs liés, non liés, masqués ou hors du serveur.

Choisissez un utilisateur ou un clan, pas les deux. La visibilité des liens masqués dépend des paramètres de confidentialité du propriétaire et de la vérification du clan.

## Gérer les liens de clan non vérifiés

Un gestionnaire du serveur ou un rôle disposant de l'accès **Links → Manage** au tableau de bord peut utiliser `/modlink add` ou `/modlink remove` pour les joueurs actuellement dans un clan de famille vérifié. Pour ajouter un lien, choisissez le **player** et un membre actuel du serveur Discord ; le lien créé n'est pas vérifié. Seul le propriétaire peut modifier un lien de joueur vérifié. Consultez [Add / Setup a clan](../dashboard/add-setup-a-clan.md) pour vérifier un clan.

Le tableau de bord propose aussi **Management → Links** pour consulter les comptes et les listes de clans. Dans l'onglet **Clans**, les gestionnaires Links peuvent ajouter ou retirer les liens non vérifiés autorisés pour les clans vérifiés.

## Explorer les liaisons dans le tableau de bord

Sous **Management → Links**, utilisez **Clans** pour les membres des clans, **Accounts** pour rechercher les membres du serveur et leurs comptes liés, et **Stats** pour les totaux de la famille ou du serveur et les statistiques de vérification. Utilisez la recherche, les filtres et la pagination. Les actions disponibles dépendent de votre accès Links ainsi que de la vérification et de la visibilité du compte.

Sous **Accounts**, le jeton API du joueur est requis pour chaque nouvelle liaison. Sous **Clans**, les gestionnaires Links autorisés peuvent gérer les liaisons non vérifiées admissibles des clans de famille vérifiés. Consultez [Dashboard access](../dashboard/dashboard-access.md) pour les permissions.
