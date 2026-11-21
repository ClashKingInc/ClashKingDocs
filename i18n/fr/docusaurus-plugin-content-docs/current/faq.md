---
description: Questions fréquentes
---

# ❓ FAQ

<details>

<summary>Comment configurer le bot ?</summary>

Suivez le [guide de démarrage](quick-start.md) pour ajouter ClashKing, ouvrir le tableau de bord, ajouter des clans et configurer vos premières fonctions.

</details>

<details>

<summary>Pourquoi certaines statistiques manquent-elles ou diffèrent-elles du jeu ?</summary>

Certaines statistiques reposent sur des observations enregistrées plutôt que sur des valeurs directement disponibles dans Clash of Clans. Les données peuvent être retardées, indisponibles ou incomplètes, en particulier pour les périodes anciennes. Une donnée manquante ne signifie pas nécessairement que sa valeur est zéro. Ajoutez votre clan sous **Management → Clans** dans le tableau de bord ; consultez [Add / Setup a clan](dashboard/add-setup-a-clan.md).

</details>

<details>

<summary>Que signifient last online et activity ?</summary>

**Last online** indique la dernière observation enregistrée d'une activité du joueur. Il s'agit d'une estimation fondée sur les données observées, pas d'un statut en ligne exact. **Activity** compte les observations enregistrées pendant la période sélectionnée ; ce n'est pas une durée de jeu. L'absence d'observation ne prouve pas qu'un joueur était inactif.

Par exemple, si les données d'un joueur changent entre deux observations, ClashKing peut enregistrer une activité sans connaître la durée exacte de sa connexion. Consultez [Clan commands](bot-commands/clan-commands.md) et [Family commands](bot-commands/family-commands.md) pour les rapports d'activité.

</details>

<details>

<summary>Pourquoi les emojis du bot ne s'affichent-ils pas ?</summary>

Vérifiez si les emojis apparaissent dans d'autres salons et si le bot peut utiliser des emojis externes dans le salon concerné. Vérifiez les permissions du serveur et du salon, y compris les exceptions propres au salon. Si le problème persiste, contactez le [serveur d'assistance](https://discord.gg/clashking).

</details>

<details>

<summary>Pourquoi mon flux ou mon log ne publie-t-il rien ?</summary>

1. Ouvrez **Logs** dans le tableau de bord et sélectionnez le bon serveur ou clan. Vérifiez que le log est activé et que sa destination est enregistrée.
2. Consultez **Issues** pour repérer un salon, un fil ou une publication de forum indisponible. Rouvrez une publication archivée avant de la sélectionner à nouveau.
3. Vérifiez que ClashKing peut créer des webhooks et publier dans la destination. Les logs sont actualisés périodiquement : laissez à l'événement le temps d'apparaître.

Consultez [Setup logs](dashboard/setup-logs.md) pour plus de détails. Pour les rappels de guerre, vérifiez aussi que le journal de guerre du clan est public ; consultez [Reminders](dashboard/reminders.md).

</details>

<details>

<summary>Pourquoi mes statistiques Légende diffèrent-elles du jeu ?</summary>

Les vues Légende utilisent les données de combat enregistrées. Les résultats récents peuvent mettre du temps à apparaître et des observations manquantes peuvent rendre les totaux du jour ou de la saison incomplets. Certains jours terminés comprennent des défenses automatiques estimées, indiquées par **Auto** dans la vue du jour ; ces valeurs dépendent des défenses précédentes disponibles.

Comparez le bon jour avec **Today** ou **Yesterday** sous `/legends player`, puis relancez la commande plus tard si les résultats sont encore en cours d'enregistrement. Des données incomplètes ne garantissent pas des totaux identiques à ceux du jeu. Consultez [Legends](bot-commands/legends.md).

</details>

<details>

<summary>Le bot peut-il montrer où l'or de capitale a été donné ?</summary>

ClashKing peut afficher les totaux de dons d'or de capitale enregistrés, mais les données du jeu n'identifient pas le bâtiment ou l'amélioration ayant reçu chaque don.

</details>
