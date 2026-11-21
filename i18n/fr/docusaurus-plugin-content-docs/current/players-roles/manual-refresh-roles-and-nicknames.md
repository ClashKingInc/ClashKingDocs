---
slug: /bot-commands/manual-refresh-roles-and-nicknames
---

# 🔄 Actualisation manuelle (rôles et surnoms)

Utilisez `/refresh` sur un serveur Discord pour actualiser les rôles et surnoms selon les règles configurées. C'est utile après une modification des paramètres ou sans attendre l'évaluation automatique. Consultez [Roles & Nicknames](roles-th-and-more/README.md) pour la configuration.

## Actualiser un membre ou un rôle

Exécutez `/refresh` sans option pour vous actualiser. Les options suivantes sont disponibles :

- **role_or_user** : choisissez un membre Discord ou un rôle. Sans choix, la commande vous actualise.
- **test** : prévisualisez les modifications proposées sans les appliquer.
- **role_treatment** : choisissez **Both**, **Add only** ou **Remove only**. La valeur par défaut est **Both** ; les surnoms sont gérés séparément.
- **advanced_mode** : ouvrez un menu pour choisir les catégories de rôles et éventuellement le surnom à actualiser. Sans cette option, toutes les catégories prises en charge sont évaluées.

Par exemple, choisissez **Add only** pour ajouter les rôles actuellement mérités sans retirer les rôles configurés auxquels le membre n'est plus admissible. Utilisez d'abord **test** pour examiner les modifications proposées.

Le bot affiche la progression et un rapport, y compris les modifications qu'il n'a pas pu appliquer. Seuls les rôles configurés sont gérés ; les autres rôles Discord ne sont pas modifiés. Les surnoms ne sont modifiés que si leur changement est configuré et si leur catégorie est incluse.

## Permissions et comptes

Les membres peuvent s'actualiser eux-mêmes. Pour actualiser un autre membre ou un rôle, il faut **Gérer le serveur**, **Administrateur**, être propriétaire du serveur ou disposer du rôle **Role refresh delegate** configuré. Consultez [Accès au tableau de bord](../server-setups/whitelist.md) pour ce paramètre.

:::info
ClashKing doit pouvoir gérer les rôles et les surnoms. Son rôle doit être placé au-dessus des rôles et membres à modifier. Seuls les comptes liés visibles sont utilisés ; consultez [Associer les joueurs](../bot-commands/link-players.md).
:::
