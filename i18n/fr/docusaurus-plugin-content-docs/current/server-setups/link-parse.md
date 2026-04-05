# 🏹 Analyse de lien

## Le but

Vous pouvez configurer l'analyse des liens afin que chaque message contenant un lien soit remplacé par des intégrations visuelles, vous permettant de voir exactement ce que contient chaque lien. Pour ce faire, utilisez la commande `/setup link-parse`.
:::info
Vous pouvez également le faire manuellement pour les liens d'armée et les liens de base (voir [army-links.md](../utility/army-links.md "mention"))
:::

## La commande

`/setup link-parse`

## Les paramètres

### Facultatif

* `{army_links}` : remplacement du lien army par un embed.
* `{player_links}` : remplacez le lien du lecteur par un embed.&#x20;
* `{clan_links}` : remplacez le lien du clan par un embed.&#x20;
* `{base_links}` : remplacez le lien de base par un embed. Cela nécessite une image et éventuellement un texte de description.
* `{show_parse}` : s'il est activé, il vous permet d'utiliser -show PartOfTheNameOfOneOfYourClans pour voir un aperçu de ce clan.
* `{manage_whitelist}` : activez l'analyse des liens uniquement dans certains canaux.

## Exemples

<details>

<summary>Liens avec l'armée</summary>

Un lien d'armée sera automatiquement converti en un format intégré, comme le montre l'exemple ci-dessous.

![](</img/gitbook/image (146).png>)

Vous pouvez également le faire manuellement avec la commande [ZXQPH8QXZ](../utility/army-links.md).

</details>

<details>

<summary>Liens des joueurs</summary>

Un lien de lecteur sera automatiquement converti en un format intégré, comme illustré dans l'exemple ci-dessous.

![](</img/gitbook/image (140).png>)

</details>

<details>

<summary>Lien de clan</summary>

Les liens de clan seront automatiquement convertis dans un format intégré, comme démontré ci-dessous.

![](</img/gitbook/image (139).png>)

</details>

<details>

<summary>Liens de base</summary>

Avez-vous une bonne base que vous aimeriez partager ? Publiez simplement une photo de la base avec le lien de la base dans un seul message. L'analyse du lien le transformera en message, comme le montre l'exemple ci-dessous. Vous pouvez également inclure du texte normal dans le message qui apparaîtra au-dessus de l'intégration, par exemple en mentionnant la défense requise du château de clan !

![](</img/gitbook/image (141).png>)

Vous pouvez également utiliser la commande [/base](../utility/base-links.md) pour créer de telles intégrations !&#x20;

Les liens de base resteront actifs pendant 90 jours à compter de la date du dernier clic.

</details>

<details>

<summary>Afficher l'analyse</summary>

Vous avez ajouté votre clan à votre serveur Discord (en utilisant [/addclan](../clan-setups/add-a-clan.md)) et souhaitez afficher rapidement une intégration de votre clan ? Vous pouvez le faire avec -shown NameOfTheClan. Une intégration apparaîtra sous le message, comme illustré dans l'exemple ci-dessous.

![](</img/gitbook/image (142).png>)

</details>

<details>

<summary>Gérer la liste blanche</summary>

Souhaitez-vous activer l’analyse des liens uniquement dans certains canaux ? Utilisez le paramètre facultatif `manage_whitelist` pour gérer la liste blanche. L'analyse des liens ne fonctionnera que dans les chaînes que vous avez ajoutées.

![](</img/gitbook/image (143).png>)

Le bouton rouge supprimera toutes les chaînes de la liste blanche. Pour ajouter à nouveau une chaîne spécifique, vous devrez resélectionner toutes les chaînes sur la liste blanche.

</details>

