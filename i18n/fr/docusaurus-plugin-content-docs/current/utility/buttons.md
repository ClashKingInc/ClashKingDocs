# 🔘 Boutons

## Le but

Cette commande permet d'ajouter un ou plusieurs boutons sous une intégration. Il peut également vous permettre d'envoyer un embed spécifique lorsque des personnes rejoignent un de votre clan, vous n'avez donc pas à le faire vous-même ! Il y a actuellement 5 boutons disponibles et vous pouvez sélectionner jusqu'à 4 boutons.
:::info
Si vous ne savez pas ce qu'est une intégration et comment en créer une avec ClashKing, consultez [embeds.md](embeds.md "mention")
:::

## La commande

La commande est `/buttons`

<figure><img src="/img/docs-media/image (5).png" alt="" /><figcaption></figcaption></figure>
:::info
Avant d'exécuter cette commande, vous devez créer un [embeds.md](embeds.md "mention")
:::

## Les paramètres

### Requis

Aucun paramètre n'est requis.

### Facultatif

* **embed :** Choisissez le [embeds.md](embeds.md "mention") auquel vous souhaitez ajouter des boutons. Si vous ne sélectionnez pas d'intégration, une intégration sera créée en fonction des boutons que vous avez choisis.

<figure><img src="/img/docs-media/image (1) (1).png" alt="" width="563" /><figcaption><p>Embed by default for Link account buttons</p></figcaption></figure>

* **button\_color :** Choisissez entre bleu, vert, gris et rouge. La couleur par défaut est le gris.
* **on\_welcome\_channel :** vous pouvez choisir un canal sur lequel l'intégration (avec boutons ou non) sera envoyée à chaque fois que quelqu'un rejoindra votre serveur Discord. Une seule intégration peut être définie, donc si vous en définissez une nouvelle, elle remplacera l'actuelle.

<figure><img src="/img/docs-media/image (2) (1).png" alt="" width="563" /><figcaption><p>Example of embeds sent every time a user join the discord server</p></figcaption></figure>

:::danger
Pour l'instant il n'y a aucun moyen de désactiver le message de bienvenue. Si vous souhaitez le supprimer, créez une nouvelle chaîne, définissez-y un message de bienvenue et supprimez la chaîne.
:::

## Types de boutons

Une fois la commande envoyée, vous pourrez choisir jusqu'à 4 boutons parmi ces 5.

<figure><img src="/img/docs-media/image (3) (1).png" alt="" /><figcaption></figcaption></figure>

### Bouton de lien

Ce bouton permet de lier un compte CoC à votre compte discord (voir [link-players](../clan-setups/link-players/ "mention"))

<figure><img src="/img/docs-media/image (83).png" alt="" width="416" /><figcaption><p>Link account pop up</p></figcaption></figure>

### Bouton d'aide du lien

Ce bouton affiche un didacticiel expliquant comment lier un lecteur et comment trouver le jeton API.

<figure><img src="/img/docs-media/image (84).png" alt="" width="322" /><figcaption></figcaption></figure>

### Actualiser les rôles

Le titre est assez clair, il vous permet de rafraîchir vos rôles si le bot ne vous a pas (encore) donné de nouveau rôle.

### Liste de tâches

Montre ce que vous devez faire aujourd'hui sur tous vos comptes. Cela inclut les succès des Légendes, les succès des Raids, les points des Jeux de Clan, les points du Season Pass, les dons de capital et l'inactivité.

<figure><img src="/img/docs-media/image (86).png" alt="" /><figcaption></figcaption></figure>

### Liste

Affiche toutes les listes dans lesquelles se trouvent actuellement vos comptes.

<figure><img src="/img/docs-media/image (87).png" alt="" /><figcaption></figcaption></figure>

## Une fois que vous avez terminé

Une fois que vous avez sélectionné les boutons, si vous n'avez pas défini `on_welcome_channel`, l'intégration sera automatiquement envoyée au canal sur lequel vous exécutez la commande.

<figure><img src="/img/docs-media/image (4) (1).png" alt="" width="563" /><figcaption></figcaption></figure>
