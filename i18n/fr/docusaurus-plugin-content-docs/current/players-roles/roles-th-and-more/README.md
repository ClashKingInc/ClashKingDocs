---
slug: /dashboard/roles-and-nicknames
---

# ⏫ Roles & Nicknames

ClashKing peut synchroniser les rôles Discord avec les comptes Clash of Clans liés et visibles des membres. Configurez la plupart des rôles sous **Roles & Nicknames** dans le tableau de bord. [Associez les joueurs](../../bot-commands/link-players.md) et [ajoutez vos clans](../../use-the-dashboard/add-a-clan.md) au préalable.

:::info
Créez d'abord les rôles Discord. ClashKing doit avoir la permission **Gérer les rôles** et son rôle doit être placé au-dessus des rôles à gérer dans Discord.
:::

## Évaluation automatique

Ouvrez le tableau de bord, sélectionnez votre serveur et choisissez **Roles & Nicknames**. Sous **Auto-Evaluation Settings**, activez l'évaluation automatique pour actualiser les rôles lorsque les données des joueurs changent. Vous pouvez également activer les surnoms automatiques, définir un délai après le départ d'un clan et permettre aux comptes visibles hors famille d'obtenir des rôles de joueur.

Seuls les comptes liés visibles sont pris en compte ; les rôles obtenus par plusieurs comptes visibles sont combinés. Vous pouvez aussi [actualiser les rôles manuellement](../manual-refresh-roles-and-nicknames.md).

## Rôles de famille et de direction

Sous **Family & Leadership**, ajoutez des rôles Discord aux groupes suivants :

- **Family** : membres ayant un compte dans un clan de la famille.
- **Non-Family** : membres sans compte dans un clan de la famille.
- **Elder**, **Co-Leader** et **Leader** : membres ayant ce rang dans un clan de la famille.

Par exemple, attribuez un rôle Family pour donner accès à un salon Discord commun. Les commandes à côté d'un rôle configuré permettent de modifier son mode d'ajout ou de retrait, ou de supprimer la règle.

## Rôles de joueur et de catégorie

Sous **Player Roles**, cliquez sur **Add Role Type**, choisissez un type, son critère et un rôle Discord existant, puis cliquez sur **Add Role**. Les règles configurées apparaissent en dessous et peuvent y être supprimées.

- **Town Hall** et **Builder Hall** : un rôle pour un niveau choisi, par exemple HDV16 ou MdO10.
- **League** et **Builder League** : un rôle pour une ligue choisie.
- **Clan Category** : un rôle pour les membres des clans d'une catégorie. Définissez d'abord la catégorie sous **Clans** ; voir [Add / Setup a clan](../../use-the-dashboard/add-a-clan.md).

## Rôles d'un clan

Sous **Management → Clans → Configure**, choisissez un **Member Role** pour les membres du clan et un **Leader Role** pour son chef et ses chefs adjoints. Ces rôles sont distincts des rôles de toute la famille. Voir [Add / Setup a clan](../../use-the-dashboard/add-a-clan.md).

## Rôles d'ancienneté Discord

Les rôles d'ancienneté sont une fonctionnalité expérimentale basée sur la durée de présence d'un membre sur le serveur Discord. Activez **Discord Tenure Roles** dans **Lab**, puis ouvrez **General settings → Discord Tenure Roles**. Cliquez sur **Add Tenure Role**, saisissez le nombre de mois et choisissez un rôle Discord. Par exemple, attribuez un rôle après six mois. Le rôle correspondant au seuil le plus élevé atteint est utilisé. La désactivation conserve les règles enregistrées et les rôles déjà attribués.

## Surnoms

La section **Nicknames** de **Roles & Nicknames** permet de définir des formats de surnom pour les membres de la famille et les autres membres. Les mises à jour automatiques des surnoms ont leur propre interrupteur sous **Auto-Evaluation Settings**.
