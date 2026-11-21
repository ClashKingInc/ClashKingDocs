---
slug: /bot-commands/to-do
---

# 🤔 À faire

Utilisez `/player to-do` dans Discord pour voir les attaques restantes et d'autres activités suivies pour les comptes liés.

## Consulter une liste de tâches

Lancez `/player to-do` sans option pour consulter vos comptes liés visibles. Pour consulter ceux d'une autre personne, sélectionnez-la avec l'option facultative **discord_user**. Les comptes masqués sont exclus. Si aucun compte lié n'est visible, consultez [Link players](../bot-commands/link-players.md).

La liste utilise jusqu'à 20 comptes visibles. S'il y en a davantage, les comptes vérifiés sont prioritaires. Par exemple, sélectionnez un membre du clan avec **discord_user** pour consulter ses comptes visibles.

## Comprendre les résultats

Les sections apparaissent lorsque des résultats pertinents et des données sont disponibles :

- **War Hits** : attaques restantes d'un compte participant à une guerre en préparation ou en cours, avec le temps restant avant la fin.
- **Legend Hits** et **Ranked Hits** : attaques restantes pour les comptes concernés.
- **Raid Hits** : attaques restantes pendant un week-end de raid actif pour les comptes concernés.
- **Clan Games** : progression inférieure à 4 000 points pendant les Jeux de clan actifs.
- **Season Pass (Top 10)** : jusqu'à dix comptes dont la progression enregistrée est supérieure à zéro et inférieure à 4 000 points.
- **Inactive Accounts (48+ hr)** : comptes dont la dernière connexion enregistrée remonte à au moins 48 heures.
- **Capital Dono (24+ hr)** : comptes dont le dernier don de capitale enregistré remonte à au moins 24 heures.

Si des données ne peuvent pas être chargées, le résultat indique les sections indisponibles. Une donnée manquante ne signifie pas qu'une tâche est terminée. Utilisez le bouton d'actualisation pour mettre la liste à jour et les boutons de navigation si elle comporte plusieurs pages.

## Exemple

Cet ancien exemple illustre la liste ; la présentation et les commandes actuelles peuvent être différentes.

<details>

<summary>Voir l'exemple de liste de tâches</summary>

<img src="/img/docs-media/image (99).png" alt="Ancien exemple de liste de tâches" width="392" />

</details>
