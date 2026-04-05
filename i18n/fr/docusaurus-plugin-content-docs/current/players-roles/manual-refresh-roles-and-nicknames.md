---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---
# 🔄 Actualisation manuelle (rôles et surnoms)

## Le but

Vous pouvez actualiser manuellement les rôles ([roles-th-and-more](roles-th-and-more/ "mention") et [setup-a-clan.md](../clan-setups/setup-a-clan.md "mention")) et les surnoms ([setup-a-server.md](../server-setups/setup-a-server.md "mention")) d'un utilisateur si le [auto-refresh.md](auto-refresh.md "mention") est éteint ou si vous avez modifié les paramètres d'un utilisateur et que rien n'a encore déclenché l'actualisation automatique.
:::info
* Les rôles de leadership sont actualisés par défaut, souhaitez-vous qu'ils ne le soient pas ? Modifiable via `/setup server [leadership_refresh]`
:::

## La commande

Il existe une commande principale pour actualiser manuellement les rôles -> `/refresh` avec deux options principales pour une expérience de base :

## Les paramètres

### Facultatif

* `role_or_user` : choisissez le rôle ou l'utilisateur dont vous souhaitez actualiser les rôles et le pseudo /or.
* `test` : ou aucune option, la valeur par défaut est non, mais oui vous permet de voir ce que le bot fera sans qu'il le fasse réellement.
* `advanced_mode` : choisissez le rôle à évaluer. Cela ajoutera uniquement les rôles que vous avez sélectionnés.
* `role_treatment` : indiquez si vous souhaitez ajouter et/or supprimer des rôles à l'utilisateur en fonction (par exemple si un joueur a quitté un de votre clan pour rejoindre un autre clan de votre famille, vous pouvez lui donner de nouveaux rôles sans supprimer celui du clan des irformers).