---
slug: /bot-commands/user-settings
---

# 😎 Paramètres utilisateur

Choisissez un compte principal lié pour chaque serveur Discord sur lequel vous utilisez ClashKing.

## Choisir votre compte principal

1. Si nécessaire, liez votre compte avec `/link add`. Consultez [Link players](link-and-unlink-players.md).
2. Dans le serveur Discord, utilisez `/link set-main` et sélectionnez l'un de vos comptes liés visibles comme **player**.
3. Vérifiez la réponse du bot. ClashKing enregistre votre choix pour ce serveur et lance une actualisation de votre surnom.

Par exemple, si vous utilisez différents comptes dans deux serveurs, vous pouvez choisir un compte principal différent pour chacun. Ce choix sert aux mises à jour du surnom selon les règles configurées sur le serveur. La modification du surnom dépend aussi des permissions du bot ; consultez [Manual refresh](manual-refresh-roles-and-nicknames.md).

## Rechercher des comptes

Le compte principal choisi pour le serveur ne détermine pas le compte ouvert par `/player lookup`. Sans joueur ni utilisateur Discord indiqué, la recherche ouvre votre compte lié visible ayant le niveau d'hôtel de ville le plus élevé. Vous pouvez aussi sélectionner directement un joueur. Consultez [Player lookup](lookup.md).
