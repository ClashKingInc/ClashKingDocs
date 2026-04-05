---
description: Creating, Editing, Copying, Posting, & Deleting an Embed
---
# 🔢 Intégrations

Pour intégrer une intégration au bot, il existe 2 options. L'option 1 est à partir de zéro et l'option 2 est si vous avez déjà une intégration, mais que vous souhaitez que le bot l'utilise (comme si vous avez un panneau de tickets sur un autre bot et que vous souhaitez l'utiliser sur ClashKing)

## Création : Option 1 (création d'une nouvelle intégration) {#creating-option-1-creating-a-new-embed}

Dirigez-vous vers [discohook](https://discohook.app) et vous verrez quelque chose comme ceci :

<figure><img src="/img/docs-media/image (130).png" alt="" /><figcaption><p>Default Discohook Page</p></figcaption></figure>

Créez votre intégration avec les options de votre choix : contenu du message, couleurs d'intégration, intégrations multiples, etc. La droite affichera un aperçu au fur et à mesure que vous modifiez.\
\
Une fois terminé, cliquez sur "Partager le message", puis sur "Copier le lien" dans la fenêtre contextuelle suivante.

<figure><img src="/img/docs-media/image (2) (1) (1).png" alt="" /><figcaption><p>Getting the url</p></figcaption></figure>

Il est maintenant enregistré dans votre presse-papiers. Revenons maintenant à Discord.\
\
Maintenant, exécutez simplement `/embed create`, choisissez un nom pour identifier l'intégration ultérieure et pour le champ `discordhook_url`, collez le lien que vous avez copié. Maintenant, votre intégration est créée !

## Création : Option 2 (copie d'une intégration existante)

L'étape 1 consiste à localiser l'intégration que vous copiez sur Discord. Ensuite, faites un clic droit sur l'intégration et cliquez sur Copier le lien du message\


<figure><img src="/img/docs-media/image (24) (1) (1).png" alt="" /><figcaption><p>Copying Message Link</p></figcaption></figure>

Cela enregistrera le lien du message dans votre presse-papiers. Dirigez-vous maintenant vers un canal dans lequel vous pouvez exécuter des commandes ClashKing et ouvrez `/embed clone`, remplissez le champ de nom avec un identifiant unique afin de pouvoir l'utiliser plus tard et dans le champ message\_link, collez le lien que vous avez copié plus tôt. Exécutez la commande et vous avez maintenant cloné cette intégration !

## Modification d'une intégration

Utilisez la commande `/embed edit`. Si vous spécifiez uniquement le champ `name`, le bot renverra un lien à partir duquel vous pourrez directement modifier votre intégration. Une fois l'édition terminée, suivez les étapes de [Creating: Option 1](embeds.md#creating-option-1-creating-a-new-embed) et copiez la liaison de données dans votre presse-papiers. Ensuite, exécutez à nouveau `/embed edit` avec le nouveau `discohook_url` et votre intégration est désormais mise à jour avec les modifications que vous avez apportées.

## Utilisation de votre intégration

Plusieurs commandes sur le bot, comme la billetterie, utilisent les intégrations que vous créez ici et celles-ci sont assez simples. Si vous souhaitez simplement publier les nouvelles intégrations que vous avez créées, utilisez `/embed post`