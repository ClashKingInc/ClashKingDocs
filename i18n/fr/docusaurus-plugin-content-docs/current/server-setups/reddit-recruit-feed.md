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
# 🤝 Reddit Recruit Feed (en anglais uniquement)

## Le but

Reddit est l'une des 2-3 principales sources de recrutement externes pour Clash of Clans. Pour ceux qui ne sont pas familiers, il existe un sous-reddit – [r/clashofclansrecruit](https://www.reddit.com/r/ClashOfClansRecruit/) – où les gens publient lorsqu'ils recherchent un clan. Ce flux publiera et éventuellement cinglera un rôle une fois activé. Cela vous permet d'avoir une longueur d'avance et d'être l'un des premiers à envoyer un message ou à commenter la publication d'un utilisateur, ce qui peut augmenter considérablement vos chances de recrutement, tout bien considéré.



## La commande

Pour ajouter ce flux -> `/setup reddit-recruit-feed` & pour supprimer - utilisez l'indicateur `remove` dans la même commande. Vous trouverez ci-dessous un exemple de publication de fil d'actualité.
:::info
Le bouton de profil du joueur apparaît lorsqu'une « recrue » a partagé son tag de joueur, et le bot fournit un moyen rapide d'afficher les détails de son compte.
:::

&#x20;![](</img/docs-media/image (14) (1) (1).png>)



## Les paramètres

### Requis

* `channel` : définissez le canal vers lequel vous souhaitez que les publications soient envoyées

### Facultatif

* `role_to_ping` : rôle auquel vous souhaitez envoyer un ping lorsqu'il y a un nouveau message&#x20;
* `remove` : pour supprimer le flux.