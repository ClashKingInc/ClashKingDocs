---
slug: /use-the-dashboard/add-setup-a-clan
description: Ajoutez et configurez un clan depuis le tableau de bord.
---

# ➕ Add / Setup a clan

Ajoutez vos clans Clash of Clans à votre serveur Discord depuis le tableau de bord, puis configurez leurs rôles Discord et leurs paramètres de famille.

## Ajouter un clan

1. Ouvrez le tableau de bord ClashKing, sélectionnez votre serveur et choisissez **Clans** sous **Management**.
2. Cliquez sur **Add Clan**, saisissez le tag du clan et cochez éventuellement **Verify this clan after adding**.
3. Cliquez sur **Add Clan**. Le clan apparaît dans la liste des clans associés. Si vous avez choisi la vérification, suivez les instructions affichées.

## Configurer un clan

Trouvez le clan dans la liste et cliquez sur **Configure**. Les paramètres disponibles sont :

- **Member Role** : le rôle Discord des membres du clan.
- **Leader Role** : le rôle du chef et des chefs adjoints.
- **Category** : regroupez le clan avec d'autres, par exemple des clans compétitifs ou événementiels.
- **Clan Abbreviation** : une abréviation utilisable dans les surnoms Discord lorsque leur modification est configurée sous **Roles / Family Settings**.

Cliquez sur **Save Changes** pour enregistrer. Les champs de rôle nécessitent l'accès à **Roles** ; leur modification nécessite le droit de gérer Roles. Les paramètres de clan nécessitent le droit de gérer Clans. Les rôles sont appliqués par la gestion des rôles de ClashKing ; leur sélection ne lance pas immédiatement une actualisation des membres.

## Vérifier un clan

La vérification confirme que le clan appartient à votre serveur. Lancez-la lors de l'ajout ou plus tard via **Configure → Verify clan**.

1. Copiez le mot de vérification du tableau de bord et ajoutez-le temporairement à la description du clan dans le jeu.
2. Conservez-le jusqu'à la réussite de la vérification. Les contrôles commencent après environ deux minutes et se répètent périodiquement ; le mot expire après 30 minutes. Recommencez s'il a expiré.
3. Une fois le clan vérifié, retirez le mot de sa description.

La vérification révèle les liens de comptes masqués dans la liste du clan et permet aux gestionnaires Links du tableau de bord d'ajouter ou de retirer les liens non vérifiés des membres. Les liens de joueurs vérifiés restent protégés.

## Organiser et supprimer les clans

Utilisez **Manage categories** pour créer, renommer, réordonner ou supprimer des catégories. La suppression d'une catégorie laisse ses clans sans catégorie. La liste permet aussi de rechercher des clans et de les réordonner dans une catégorie.

Pour retirer un clan du serveur, ouvrez **Configure**, choisissez **Delete clan** et confirmez. Ses rappels et logs associés sont également supprimés.

## Autres paramètres de clan

Vous pouvez configurer ces fonctions séparément pour chaque clan :

- **Logs** : publiez l'activité du clan et les mises à jour de guerre dans Discord. Consultez [Configurer les logs](setup-logs.md).
- **Reminders** : rappelez aux joueurs les guerres, le week-end de raids ou les jeux de clan. Consultez [Rappels](../server-setups/reminders.md).
- **Comptes à rebours de guerre** : affichez le score ou le temps de guerre restant du clan dans des salons vocaux. Dans **Logs**, sélectionnez le clan et ouvrez **Countdowns**. Consultez [Voice Countdowns](../server-setups/voice-countdowns.md).
- **Automatic war events** : créez des événements Discord pour les guerres normales et de ligue visibles. L'interrupteur se trouve sous **Logs → sélectionnez votre clan → Countdowns**. Le bot doit pouvoir créer des événements Discord. Désactiver l'option ne supprime pas les événements déjà créés.
