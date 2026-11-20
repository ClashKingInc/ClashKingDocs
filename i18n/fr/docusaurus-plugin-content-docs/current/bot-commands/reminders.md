# 📳 Rappels ponctuels

Utilisez `/reminders` dans Discord pour envoyer immédiatement un seul rappel. Cette commande ne crée ni rappel enregistré ni planning. Pour les rappels automatiques, consultez les [rappels du tableau de bord](../server-setups/reminders.md).

## Envoyer un rappel

Exécutez `/reminders` sur votre serveur. La permission **Gérer le serveur** est nécessaire.

- **type** (obligatoire) : choisissez **War & CWL**, **Clan Games** ou **Raid Weekend**.
- **clan** (obligatoire) : sélectionnez le clan par son nom ou son tag.
- **channel** (facultatif) : choisissez un salon textuel ou un fil du serveur. Sans choix, le rappel est envoyé dans le salon actuel.
- **custom_text** (facultatif) : ajoutez jusqu'à 500 caractères sous le rappel.

Le bot vérifie l'événement en cours et affiche les joueurs qui doivent encore participer. Pendant la préparation d'une guerre, il affiche plutôt les participants prévus. Il mentionne les joueurs dont le compte est lié et identifiable sur le serveur ; les autres sont affichés avec leur nom et leur tag. Le journal de guerre doit être accessible. Les jeux de clan et le week-end de raids doivent être en cours.
