---
description: There are currently 5 reminder types
---
# 📳 Rappels

## Le but

Rappelez à vos membres de clan les tâches qu'ils doivent accomplir dans le jeu !
:::info
Si vous êtes curieux de savoir à quoi ressemblent ces rappels, ils sont tous en démo dans le [support server.](https://discord.gg/clashking). Vous pouvez également cliquer sur le nom du type de journal pour être redirigé vers un exemple.
:::

## Les commandes

Pour créer de nouveaux rappels, vous devez utiliser la commande `/reminders create`.

<figure><img src="/img/docs-media/image (113).png" alt="" /><figcaption></figcaption></figure>

Vous pouvez également utiliser :&#x20;

* `/reminders list` pour voir les rappels que vous avez déjà définis.
* `/reminders edit` pour modifier ou supprimer un rappel que vous avez déjà créé.
* `/reminders manual` pour envoyer un ping à votre partenaire de clan dès maintenant !

## Les paramètres

### Requis

* `type:` choisissez entre guerre et CWL, Clan Capital, Inactivité, Clan Games et Roster.
* `time_left` : temps restant avant d'envoyer un ping à vos camarades de clan. Utilisez des virgules pour saisir plusieurs fois.

### Facultatif

`channel:` Le canal auquel vous souhaitez que le ping soit envoyé. Si vous ne définissez pas de canal, le ping sera envoyé dans le canal dans lequel la commande a été exécutée.

## Types de rappels

Dans cette section, nous expliquerons les différents types de rappels.

:::danger
Pour l'instant seuls les rappels de guerre et CWL fonctionnent. D'autres rappels seront réactivés prochainement. Restez à l'écoute!
:::

#### Guerre et CWL

Pingez les utilisateurs qui ont des attaques restantes X heures avant la fin de la guerre (48h max). Un Gif peut également être utilisé !
:::info
Votre journal de guerre doit être défini sur « public » dans le jeu, sinon vous ne recevrez pas de rappel.
:::

<figure><img src="/img/docs-media/image (115).png" alt="" width="563" /><figcaption><p>Reminder 30 min before the end of the war</p></figcaption></figure>

#### **Cas d'utilisation :**&#x20;

* Rappelez-leur pendant les jours de préparation de remplir les châteaux du clan,&#x20;
* Informez-les que la guerre a commencé,
* Rappelez-leur d'attaquer quand il ne reste que quelques heures.
:::warning
Les types de rappel ci-dessous ne fonctionnent actuellement pas
:::

### Capitale du clan

Rappelez aux gens d'utiliser leurs attaques de raids s'ils ne l'ont pas encore fait.

### Inactivité

Pingez aux personnes inactives depuis X jours.

### Jeux de clans

Rappelez aux gens de participer au jeu de clan s’ils ont moins d’un certain nombre de points.

### Liste

Envoyez un ping aux personnes lorsqu'une liste est sur le point de se terminer (voir [manage-rosters-and-more.md](../clans-management/rosters/manage-rosters-and-more.md "mention")).

