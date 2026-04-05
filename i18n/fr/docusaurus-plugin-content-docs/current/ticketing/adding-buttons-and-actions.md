---
description: Adding more functionality to your tickets!
---
# ✅ Ajout de boutons et d'actions

Si vous êtes dans cette section, vous devez avoir au minimum 1 intégration créée (`/embed create`) et 1 panneau de tickets créé (`/ticket panel-create`). \
\
En supposant que ce soit le cas, vous pouvez désormais ajouter des fonctionnalités supplémentaires à vos tickets. Ce guide sera décomposé en 3 parties principales :

* ajout et modification de boutons
* demandes de compte
* questions

## Ajout et modification de boutons

Pour cela, utilisez `/ticket button-add,` qui propose 4 options :

* `{panel_name}` : le panneau auquel vous souhaitez ajouter le bouton
* `{button_text}` : le texte que vous souhaitez sur le bouton
* `{button_color}` : de quelle couleur souhaitez-vous le bouton (uniquement bleu, vert, gris ou rouge)
* `{button_emoji}` : un emoji pour le bouton (vous pouvez utiliser des emojis personnalisés tant qu'ils sont sur le serveur)

Une fois exécuté, vous aurez un tout nouveau bouton pour votre panneau.
:::info
Vous devrez réexécuter `/ticket panel-post` lorsque de nouveaux boutons seront ajoutés
:::

L'édition des boutons fonctionne de manière très similaire, `/ticket button-edit`, mêmes options, sauf qu'il demandera quel bouton du panneau modifier.

Et enfin, vous pouvez supprimer un bouton avec `/ticket button-remove`

## Demandes de compte Clash

Nous abordons maintenant les choses que cette billetterie peut faire et que d'autres ne peuvent pas faire. À présent, vous pouvez modifier et créer des intégrations, modifier et créer des panneaux et même ajouter et modifier des boutons, mais il s'agit toujours d'un système de billetterie de base. Changeons ça !

Exécutez /ticket appliquer. Ici, 4 options vous seront présentées :

* &#x20;\# de comptes autorisés à postuler (avec combien de comptes les personnes peuvent-elles postuler dans un ticket)
* Assemblée publique minimale autorisée
* On/Off (cela active tout le paramètre /off, s'il est vert (allumé), demandera aux gens de postuler avec un compte)
* Envoyer les informations sur le joueur (si vert (allumé), enverra une ventilation des informations sur le joueur à l'ouverture du ticket)\


    <figure><img src="/img/gitbook/image (1) (1) (1) (1) (1).png" alt="" /><figcaption><p>/ticket apply</p></figcaption></figure>
:::warning
Une mise en garde concernant l'ensemble du processus de demande de ticket est qu'il nécessite que les comptes des personnes y soient liés. Le bot en informe les utilisateurs s'ils finissent par essayer de postuler sans compte, mais il appartient au serveur de mettre en place un système de liaison robuste en utilisant des éléments tels que des boutons de lien ou autres. Ce n'est cependant pas si grave de nos jours, car un nombre surprenant de personnes sont liées à Discord :smile:&#x20;
:::

Nous pouvons cependant aller plus loin : les règles d'application /ticket nous permettent de filtrer les candidats au-delà du simple niveau de la mairie. Vous pouvez filtrer par niveaux de héros individuels ou par étoiles de guerre. Cette commande explique assez bien son fonctionnement une fois exécutée, mais voici à quoi elle ressemble. Copiez les exigences, en conservant le même format, modifiez-les, puis téléchargez-les à nouveau (celui donné n'est qu'un exemple et pas réellement la valeur par défaut sur laquelle tout le monde est défini)

<figure><img src="/img/gitbook/image (2) (1) (1) (1) (1).png" alt="" width="479" /><figcaption></figcaption></figure>

##Questions

Vous pourriez avoir plus de questions à poser à un candidat que simplement quel est son compte de conflit. Et c'est là que les questions modales entrent en jeu. En utilisant les paramètres /ticket et en sélectionnant le panneau et le bouton appropriés, avec le choix "Questions", exécutez la commande. Un modal s'ouvrira et vous pourrez définir les questions que vous souhaitez que le bot pose lorsqu'il postule.