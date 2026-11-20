---
description: Liez des comptes Clash of Clans à des utilisateurs Discord avec /link.
---

# 🔗 (Un)link players

## /link add

Utilisez `/link add` pour lier un compte. Une fenêtre s'ouvre où vous saisissez :

- **Player tag** : le tag du compte Clash of Clans que vous souhaitez lier.
- **API token** : le token API de votre compte Clash of Clans.

:::info
Votre token API est sûr à partager avec le bot. Le bot l'utilise une seule fois pour vérifier que l'utilisateur Discord est bien le propriétaire du compte. Cela améliore la confidentialité et aide à prévenir les abus.
:::

## /link remove

Utilisez `/link remove` et indiquez le joueur comme argument pour supprimer un compte lié.

## /link set-main

Utilisez `/link set-main` avec un argument **player** pour définir ce compte comme votre compte principal. De nombreuses commandes du bot Discord utilisent d'abord ce compte principal.

## /link list

Utilisez `/link list` pour voir les comptes liés. Il y a deux entrées optionnelles :

- **clan** : filtre les résultats par un clan spécifique.
- **discord_user** : filtre les résultats par un utilisateur Discord spécifique.

Si vous n'indiquez aucune des deux, la commande affiche tous les comptes liés auxquels vous avez accès.
