---
description: Configurez les tickets dans le tableau de bord et gérez-les dans Discord.
---

# 🎫 Tickets

Les tickets permettent aux membres de contacter l'équipe dans un salon Discord dédié. Configurez les panneaux dans le tableau de bord, puis utilisez les commandes ci-dessous dans un ticket existant. Les actions nécessitent les permissions de l'équipe de ticket appropriées.

## Configurer un panneau de tickets

1. Ouvrez le tableau de bord, sélectionnez votre serveur et choisissez **Tickets** sous **Management**.
2. Sous **Panels**, cliquez sur **New panel** et donnez-lui un nom. Ouvrez ensuite **Configure** pour ce panneau.
3. Configurez les catégories de tickets et les salons de logs du panneau. Sous **Ticket actions**, ajoutez des actions et configurez notamment les rôles d'équipe, conditions de compte, messages d'ouverture et questions.
4. Composez le message du panneau et associez ses boutons ou options de menu aux actions. Enregistrez le brouillon, puis choisissez **Publish saved changes** et sélectionnez un salon Discord lors de la première publication.

Vous pouvez aussi préparer des messages réutilisables sous **Shared messages**. Enregistrer un brouillon ne modifie pas automatiquement le message Discord publié ; publiez les modifications lorsqu'elles sont prêtes.

## Changer le statut d'un ticket

Utilisez `/ticket status` dans le ticket et choisissez un **status** :

- **open** : ouvre le ticket.
- **sleep** : met le ticket en attente et masque son salon au demandeur.
- **close** : ferme le ticket après confirmation. Le salon Discord du ticket est supprimé définitivement ; si les transcriptions sont activées, elles sont enregistrées avant la suppression.

## Ajouter un membre

Utilisez `/ticket add` dans le ticket et sélectionnez un **member** Discord pour lui donner accès à ce ticket.

## Envoyer un message partagé

Créez d'abord un message sous **Tickets → Shared messages** dans le tableau de bord. Utilisez ensuite `/ticket messages` dans un ticket pour le sélectionner et l'envoyer. Répondez aux éventuelles questions personnalisées du modèle lorsque cela vous est demandé.
