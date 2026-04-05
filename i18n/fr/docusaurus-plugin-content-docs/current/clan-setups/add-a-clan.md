---
description: Adding a clan is easy! Here is how to get started!
---
# ➕ Ajouter un clan

:::danger
Avant d'ajouter un clan, assurez-vous d'abord d'avoir [invited ClashKing Bot](https://invite.clashk.ing) et donnez-lui les autorisations d'administrateur.
:::

## Le but

Ajouter un clan à votre serveur vous permet de le gérer directement depuis Discord. Une fois votre clan ajouté, il sera suivi par notre système, vous donnant un aperçu clair de ce qui se passe au sein de votre clan et vous fournissant des outils puissants pour le gérer efficacement.

## La commande

Pour cela, vous devez utiliser la commande `/addclan`.
:::info
Avant d'exécuter cette commande, vous devez créer un rôle de membre (et éventuellement un rôle de leadership) à partir de votre serveur Discord si vous n'en avez pas déjà un. Par exemple : @/member (et @/coleader)
:::

## Les paramètres

### Requis

* `clan_tag` : C'est le tag unique utilisé pour identifier un clan. Il peut être trouvé dans le jeu sous le nom du clan.&#x20;
* `category` : C'est une façon d'organiser vos clans. De nombreuses familles claniques comptent 5 clans ou plus. Parfois, certains sont uniquement destinés aux clans CWL ou Event. Vous pouvez utiliser l'une des options prédéfinies (**Général, Feeder, War, Esport**) ou saisir la vôtre.
* `member_role` : Le rôle que devraient recevoir les membres de ce clan. Donc sur votre discord, si le bot gérait les rôles, chaque personne de ce clan obtiendrait ce rôle. Utile si vous créez des chaînes spécifiques à un clan.
* `clan_channel` : cette chaîne doit être l'une des chaînes auxquelles vos membres de clan ont accès. C'est ici que le bot enverra des messages de bienvenue.

### Facultatif

`leadership_role` : Le rôle que recevront tous les co-leaders et leaders de ce clan. Dans une discorde typique, vous pouvez avoir une discussion principale pour un clan ou une discussion de chef cumulative pour tous les clans - ce rôle peut être utile ici.
:::info
Vous pouvez supprimer un clan du serveur avec la commande `/removeclan` !
:::

## Une fois que vous avez terminé

Après les avoir remplis, vous devriez recevoir un message de réussite indiquant ce que vous avez configuré. \
Vous pouvez continuer à configurer certains journaux ou d'autres configurations, mais cela seul vous permettra d'utiliser une grande partie des commandes "statiques" et commencera à suivre les guerres, les dons, les activités et plus encore pour votre clan !