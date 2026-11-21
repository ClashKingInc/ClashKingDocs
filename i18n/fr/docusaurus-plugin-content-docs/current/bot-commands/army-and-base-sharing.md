---
slug: /bot-commands/army-and-base-sharing
description: Partagez des liens d'armée et de base dans Discord.
---

# 🔗 Partager des armées et des bases

Utilisez les commandes Discord pour partager une armée sous forme de résumé ou publier une base avec des captures d'écran et des boutons de vote.

## Partager une armée

Utilisez `/army link` dans un serveur et indiquez :

- **army** (obligatoire) : un lien d'armée Clash of Clans ou un code de partage.
- **nickname** (obligatoire) : un nom pour l'armée.
- **notes** (facultatif) : des informations supplémentaires pour le message.

Par exemple, nommez l'armée et ajoutez des notes expliquant comment l'utiliser. Le résultat présente la composition disponible et un bouton **Copy Army**. Si le lien contient des troupes de château de clan ou des équipements de héros, ils peuvent aussi apparaître dans le résumé.

## Enregistrer et partager une armée

Cliquez sur **Save Army** dans un résultat pour ajouter l'armée à votre bibliothèque ClashKing. Pour partager une armée enregistrée, utilisez `/army share` et sélectionnez-la dans le menu. Connectez-vous à l'application ClashKing avec Discord pour utiliser votre bibliothèque. Si elle contient plus de 25 armées, supprimez les armées supplémentaires dans l'application avant de les partager par le bot.

## Partager une base

Utilisez `/base` dans un serveur pour ouvrir le formulaire. Indiquez un lien de base Clash of Clans et une description, puis ajoutez une à quatre captures d'écran. Les formats acceptés sont PNG, JPEG, GIF et WebP, avec un maximum de 25 Mo par image. Envoyez le formulaire pour publier la base dans le salon.

Par exemple, précisez le niveau d'hôtel de ville et l'utilisation prévue de la base, puis ajoutez une capture d'écran. Les autres membres peuvent utiliser le bouton de lien pour obtenir le lien de la base et voter avec les boutons de feedback. Le message affiche le nombre de téléchargements.

## Analyser automatiquement les liens

Configurez [Link parsing](../dashboard/link-parsing.md) dans le tableau de bord pour développer automatiquement les liens d'armée et de base compatibles publiés dans les messages. Cette page contient aussi des exemples.
